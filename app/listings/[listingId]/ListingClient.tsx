'use client'

import axios from 'axios'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Range } from 'react-date-range'
import { useRouter } from 'next/navigation'
import { differenceInDays, eachDayOfInterval } from 'date-fns'

import { SafeListing, SafeReservation, SafeUser } from '@/app/types'

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

const ListingClient: React.FC<ListingClientProps> = ({reservations = [], listing, currentUser}) => {
  return (
    <div>ListingClient</div>
  )
}

export default ListingClient