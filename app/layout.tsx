// import { Nunito } from 'next/font/google'

import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/Modals/RegisterModal'
import LoginModal from './components/Modals/LoginModal'

import ToasterProvider from './providers/ToasterProvider'

import './globals.css'
import ClientOnly from './components/ClientOnly'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

// const font = Nunito({ subsets: ['latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=''>
      {/* <body className={font.className}> */}
        <div className="">
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <Navbar />
          </ClientOnly>
          {children}
        </div>
      </body>
    </html>
  )
}