'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from './Modal'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { Range } from 'react-date-range'
import dynamic from 'next/dynamic'
import Heading from '../Heading'
import CountrySelect, { CountrySelectValue } from '../Inputs/CountrySelect'
import Calendar from '../Inputs/Calender'

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const dateOptions = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
}

const SearchModal = () => {
  const searchModal = useSearchModal()
  const router = useRouter()
  const params = useSearchParams()

  const [step, setStep] = useState(STEPS.LOCATION)

  const [location, setLocation] = useState<CountrySelectValue>()
  const [dateRange, setDateRange] = useState<Range>(dateOptions)

  const Map = useMemo(() => dynamic(() => import('../Map'), {
    ssr: false
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [location])

  const onBack = () => setStep((value) => value - 1)

  const onNext = () => setStep((value) => value + 1)


  const onSubmit = () => {}


  const actionLabel = useMemo(() => {
    if(step === STEPS.INFO) return 'Search'

    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if(step === STEPS.LOCATION) return undefined

    return 'Back'
  }, [step])

  let bodyContent

  bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading 
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
      <CountrySelect 
        value={location} 
        onChange={(value) => setLocation(value as CountrySelectValue)}
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
  )

  if(step === STEPS.DATE) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='When do you plan to go?'
          subtitle='Make sure everyone is free!'
        />
        <Calendar
          value={dateRange}
          onChange={(value) => setDateRange(value.selection)}
        />
      </div>
    )
  }

  if(step === STEPS.INFO) {
    <div className='flex flex-col gap-8'>
    </div>
  }

  return (
    <Modal 
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  )
}

export default SearchModal