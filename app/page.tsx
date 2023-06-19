import getLisitings from './actions/getListings'
import getCurrentUser from './actions/getCurrentUser'

import Container from './components/Container'
import ClientOnly from './components/ClientOnly'
import EmptyState from './components/EmptyState'
import ListingCard from './components/listings/ListingCard'

const Home = async ({ searchParams }: HomeProps) => {
    const currentUser = await getCurrentUser()
    const listings = await getLisitings(searchParams)

    let content

    if (listings.length === 0) {
      content = (
        <ClientOnly>
          <EmptyState showReset />
        </ClientOnly>   
      )
    }

    content = (
      <ClientOnly>
        <Container>
          <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            {listings.map((listing) => {
              return (
                <ListingCard
                  currentUser={currentUser} 
                  key={listing.id}
                  data={listing}
                />
              )
            })}
          </div>
        </Container>
      </ClientOnly>
    )

    return content
}

export default Home 