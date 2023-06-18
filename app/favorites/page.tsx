import getCurrentUser from '../actions/getCurrentUser'
import FavoritesClient from './FavoritesClient'

import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'

const FavoritesPage = async () => {
  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()

  let content

  if (listings.length === 0) {
    content = ( 
      <ClientOnly>
        <EmptyState 
          title='No favorites found'
          subtitle='Looks like you have no favorite listings.'
        />
      </ClientOnly>
    )
  }

  content = (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )

  return content
}

export default FavoritesPage    