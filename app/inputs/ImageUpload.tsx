'use client'

import { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
  var cloudinary: any
}

const uploadPreset = 'pgc9ehd5'

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  return (
    <CldUploadWidget
      onUpload={handleUpload} 
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1
      }}
    >
        {({ open }) => {
            return (
                <div 
                    onClick={() => open?.()} 
                    className='relative cursor-pointer hover:opacity-70 transition border-dashed  border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600'
                >
                    <TbPhotoPlus size={50} />
                    <p className='font-semibold text-lg'>Click to upload</p>
                    {value && (
                        <div className='absolute inset-0 w-full h-full'>
                            <Image 
                                fill 
                                style={{ objectFit: 'cover' }} 
                                src={value} 
                                alt='Property' 
                            />
                        </div>
                    )}
                </div>
            )
        }}
    </CldUploadWidget>
  )
}

export default ImageUpload