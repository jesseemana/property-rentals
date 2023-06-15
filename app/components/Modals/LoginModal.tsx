'use client'

import { signIn } from 'next-auth/react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import Modal from './Modal'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import Button from '../Button'

import useLoginModal from '@/app/hooks/useLoginModal'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import { useRouter } from 'next/navigation'


const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  // useForm from react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ 
    defaultValues: {
      email: '',
      password: ''
    },
  })

  const onToggle = () => {
    loginModal.onClose()
    registerModal.onOpen()
  } 

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    })
    .then((callback) => {
      setIsLoading(false)

      if(callback?.ok) {
        toast.success('Logged In')
        router.refresh()
        loginModal.onClose()
      }

      if(callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back"
        subtitle="Login to your account!"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button 
        outline
        label='Continue With Google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button 
        outline
        label='Continue With Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className='text-neutral-500 text-center mt-4 font-light'>
        <p>New to Airbnb?
          <span 
            onClick={onToggle} 
            className='text-neutral-800 ml-1 cursor-pointer hover:underline'
          > 
            Register
          </span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal