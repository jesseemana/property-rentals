// import { Nunito } from 'next/font/google'

import Navbar from './components/Navbar/Navbar';
import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

// const font = Nunito({ 
//   subsets: ['latin'], 
// });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className=''>
      {/* <body className={font.className}> */}
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
