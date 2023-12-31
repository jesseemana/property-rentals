'use client'

import Modal from './Modal'
import useSearchModal from '@/app/hooks/useSearchModal'

import { formatISO } from 'date-fns'
import { Range } from 'react-date-range'
import { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import qs from 'query-string'
import dynamic from 'next/dynamic'
import Heading from '../Heading'
import Counter from '../Counter'
import Calendar from '../Inputs/Calender'
import CountrySelect, { CountrySelectValue } from '../Inputs/CountrySelect'

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

  const [roomCount, setRoomCount] = useState(1)
  const [guestCount, setGuestCount] = useState(1)
  const [bathroomCount, setBathroomCount] = useState(1)
  const [location, setLocation] = useState<CountrySelectValue>()
  const [dateRange, setDateRange] = useState<Range>(dateOptions)

  const Map = useMemo(() => dynamic(() => import('../Map'), {
    ssr: false
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [location])


  const onBack = () => setStep((value) => value - 1)

  const onNext = () => setStep((value) => value + 1)

  const onSubmit = () => {
    if(step !== STEPS.INFO) return onNext()

    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount
    }

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate)
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate)
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true })

    setStep(STEPS.LOCATION)
    searchModal.onClose()
    router.push(url)
  }


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
        title='Where do you wanna go?'
        subtitle='Find the perfect location!'
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
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='More information'
          subtitle='Find your perfect place!'
        />
        <Counter 
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title='Guests' 
          subtitle='How many guests are coming?'
        />
        <hr />
        <Counter 
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title='Rooms' 
          subtitle='How many rooms do you need?'
        />        
        <hr />
        <Counter 
          onChange={(value) => setBathroomCount(value)}
          value={bathroomCount}
          title='Bathrooms'
          subtitle='How many bahtrooms do you need?'
        />
      </div>
    )
  }

  return (
    <Modal 
      isOpen={searchModal.isOpen}
      title='Filters'
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