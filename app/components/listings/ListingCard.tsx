'use client'

import useCountries from '@/app/hooks/useCountries';
import { SafeUser, SafeListing, SafeReservation } from '@/app/types'
import { useRouter } from 'next/navigation' 
import { useMemo } from 'react'
import { format } from 'date-fns'
import Image from 'next/image'

interface ListingCardProps {
  data: SafeListing
  reservation?: SafeReservation
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  currentUser?: SafeUser | null
}


const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser
}) => {
  const router = useRouter()
  const { getByValue } = useCountries()

  const location = getByValue(data.locationValue)

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if(disabled) return 

    onAction?.(actionId)
  }

  const price = useMemo(() => {
    if(reservation) return reservation?.totalPrice

    return data.price
  }, [reservation, data.price])

  const reservationDate = useMemo(() => {
    if(!reservation) return null

    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)

    return `${format(start, 'PP')} - ${format(end, 'PP')}`
  }, [reservation])
  
  return (
    <div 
      onClick={() => router.push(`/listings/${data.id}`)}
      className='cols-span-1 cursor-pointer group'
    >
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
          <Image 
          fill
          className='object-cover h-full w-full group-hover:scale-110 transition'
          src={data.imageSrc}
          alt='Listing'
          />
        </div>
      </div>
    </div>
  )
}

export default ListingCard