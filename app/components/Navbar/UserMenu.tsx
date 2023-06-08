'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useState, useCallback } from 'react'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div 
                onClick={() => {}} 
                className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
            >
                Add Your Home
            </div>
            <div 
                onClick={toggleOpen} 
                className='py-4 border-[1px] md:py-1 md:px-3 rounded-full hover:bg-neutral-200 flex flex-row items-center transition cursor-pointer'
            >
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar /> 
                </div>
            </div>
        </div>

        {isOpen && (
            <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'
            >
                <div className=''>

                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenu