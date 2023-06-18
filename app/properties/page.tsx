import getCurrentUser from '@/app/actions/getCurrentUser'
import getListings from '@/app/actions/getListings'

import ClientOnly from '@/app/components/ClientOnly'
import EmptyState from '@/app/components/EmptyState'

import PropertiesClient from './PropertiesClient'

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser()

  let content 

  if(!currentUser) {
    content = (
      <ClientOnly>
        <EmptyState 
          title= 'Unauthorized'
          subtitle= 'Please login'
        />
      </ClientOnly>
    )
  }

  const listings = await getListings({ userId: currentUser?.id })
  
  if(listings.length === 0) {
    content = (
      <ClientOnly>
        <EmptyState 
          title= 'No properties found'
          subtitle= 'Looks like you have no properties.'
        />
      </ClientOnly>
    )
  }

  content = (
    <ClientOnly>
      <PropertiesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )

  return content
}

export default PropertiesPage   