'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'

const UserMenu = () => {
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
                onClick={() => {}} 
                className='py-4 border-[1px] md:py-1 md:px-3 rounded-full hover:bg-neutral-200 flex flex-row items-center transition cursor-pointer'
            >
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserMenu