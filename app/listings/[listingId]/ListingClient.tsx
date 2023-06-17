'use client'

import axios from 'axios'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Range } from 'react-date-range'
import { useRouter } from 'next/navigation'
import { differenceInDays, eachDayOfInterval } from 'date-fns'

import { SafeListing, SafeReservation, SafeUser } from '@/app/types'
import useLoginModal from '@/app/hooks/useLoginModal'
import { categories } from '@/app/components/Navbar/Categories'
import Container from '@/app/components/Container'
import ListingHead from '@/app/components/listings/ListingHead'

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};

interface ListingClientProps {
  reservations?: SafeReservation[]
  listing: SafeListing & {
    user: SafeUser
  }
  currentUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({ reservations = [], listing, currentUser }) => {
  const loginModal = useLoginModal()
  const router = useRouter()

  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category)
  }, [listing.category])


  return (
    <Container>
        <div className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col gap-6 '>
                <ListingHead
                    title={listing.title}
                    imageSrc={listing.imageSrc}
                    locationValue={listing.locationValue}
                    id={listing.id}
                    currentUser={currentUser}
                />
            </div>
        </div>
    </Container>
  )
}

export default ListingClient