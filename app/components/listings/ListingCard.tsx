'use client'

import useCountries from '@/app/hooks/useCountries';
import { SafeUser, SafeListing, SafeReservation } from '@/app/types'
import { useRouter } from 'next/navigation' 


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
  
  return (
    <div>Card</div>
  )
}

export default ListingCard