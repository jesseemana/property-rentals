'use client'

import Avatar from '../Avatar'
import MenuItem from './MenuItem'

import { useState, useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRentalModal from '@/app/hooks/useRentalModal'

import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'
import { useRouter } from 'next/navigation'

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const loginModal = useLoginModal()
  const rentModal = useRentalModal()
  const registerModal = useRegisterModal()
  
  const toggleOpen = () => setIsOpen((prev) => !prev)

  const onRent = () => {
    if(!currentUser) return loginModal.onOpen()

    rentModal.onOpen()
  }

  /*
  const onRent = useCallback(() => {
    if(!currentUser) return loginModal.onOpen()

    rentModal.onOpen()
  }, [currentUser, loginModal, rentModal])
  */

  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div 
                onClick={onRent} 
                className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer capitalize'
            >
                add your place
            </div>
            <div 
                onClick={toggleOpen} 
                className='py-4 border-[1px] md:py-1 md:px-3 rounded-full hover:bg-neutral-200 hover:shadow-md gap-3 flex flex-row items-center transition cursor-pointer'
            >
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar src={currentUser?.image} /> 
                </div>
            </div>
        </div>

        {isOpen && (
            <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                <div className="flex flex-col cursor-pointer">
                    {currentUser ? (
                        <>
                            <MenuItem 
                                label='My Trips' 
                                onClick={() => router.push('/trips')}
                            />
                            <MenuItem 
                                label='My Favorites' 
                                onClick={() => router.push('/favorites')}
                            />
                            <MenuItem 
                                label='My Reservations' 
                                onClick={() => router.push('/reservations')}
                            />
                            <MenuItem 
                                label='My Properties' 
                                onClick={() => {}}
                            />
                            <MenuItem 
                                label='AirBnB My Place' 
                                onClick={rentModal.onOpen}
                            />
                            <hr />
                            <MenuItem 
                                label='Logout' 
                                onClick={() => signOut()}
                            />
                        </>
                    ) : (
                    <>
                        <MenuItem 
                            label='Login' 
                            onClick={loginModal.onOpen}
                        />
                        <MenuItem 
                            label='Sign Up' 
                            onClick={registerModal.onOpen}
                        />
                    </>
                    )}
                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenu