import ClientOnly from '@/app/components/ClientOnly'
import EmptyState from '@/app/components/EmptyState'
import ListingClient from './ListingClient'

import getListingById from '@/app/actions/getListingById'
import getCurrentUser from '@/app/actions/getCurrentUser'

const ListingPage = async ({params}: { params: IParams }) => {
  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        // reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default ListingPage