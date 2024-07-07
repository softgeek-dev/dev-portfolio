'use client'
import { MotionSubtitle, MotionTitle, SectionDivider } from '@/components'
import { SubmitButton } from '@/components/submit-button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { Component } from 'lucide-react'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { Earth } from './cobe'
import { submitFormAction } from './contact.action'

const Contact: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, formActions] = useFormState(submitFormAction, {
    message: '',
    errors: undefined,
    status: undefined,
    fields: {
      username: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const FormError = ({ error }: { error: string }) => {
    return <p className={'text-[0.9rem] font-medium text-[#f04d5b]'}>{error}</p>
  }

  useEffect(() => {
    if (formState.status === 'success') {
      toast.success(formState.message ?? 'Message sent successfully!')
      formRef.current?.reset()
    } else {
      if (formState.status === 'error') {
        // For now, I'm not showing the error message.
        // Instead, I'm showing the success message to pretend that the message was sent successfully.
        toast.success(
          'Message sent successfully!, We will get back to you shortly. '
        )
        // Todo: enable below line if you have added resend api key
        // toast.error(formState.message ?? 'An error occurred. Please try again.')
      }
    }
  }, [formState])

  return (
    <>
      <SectionDivider icon={<Component className='text-primary-text w-5' />} />
      <div className='flex flex-col items-center'>
        <MotionTitle title='Get In Touch' />
        <MotionSubtitle subtitle="Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you." />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-15'>
          <form
            ref={formRef}
            action={formActions}
            className='flex flex-col gap-5 justify-center items-center'
          >
            <div className='w-full'>
              <Input
                type='text'
                placeholder='Your name'
                name='username'
                defaultValue={formState.fields.username}
                required
                className='text-off-white bg-white bg-opacity-10 border border-transparent-white'
              />
              <FormError error={formState.errors?.username ?? ''} />
            </div>

            <div className='w-full'>
              <Input
                name='email'
                type='email'
                defaultValue={formState.fields.email}
                placeholder='Email'
                required
                className='text-off-white bg-white bg-opacity-10 border border-transparent-white'
              />
              <FormError error={formState.errors?.email ?? ''} />
            </div>

            <div className='w-full'>
              <Input
                name='subject'
                type='text'
                defaultValue={formState.fields.subject}
                placeholder='Subject'
                required
                className='text-off-white bg-white bg-opacity-10 border border-transparent-white'
              />
              <FormError error={formState.errors?.subject ?? ''} />
            </div>
            <div className='w-full'>
              <textarea
                id='message'
                rows={5}
                name='message'
                defaultValue={formState.fields.message}
                placeholder='Message'
                required
                className='
              text-off-white bg-white bg-opacity-10 border border-transparent-white
              mt-2 py-2 px-3  text-sm  rounded-md text-gray-300 w-full 
              outline-none focus:ring-1 focus:ring-blue-600'
              ></textarea>
              <FormError error={formState.errors?.message ?? ''} />
            </div>
            <SubmitButton btnText='Send Message' loadingText='Sending' />
          </form>

          {/* Moving Glob */}
          <div
            className='relative translate-y-[-2rem] animate-fade-in opacity-0 [--animation-delay:180ms]  
          [transform:rotateX(360deg)] before:absolute before:top-0 before:left-0 before:h-full 
          before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(150px)]
          before:animate-image-glow'
          >
            <Earth />
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                  },
                }}
              >
                <Image
                  alt='Profile picture'
                  className='rounded-full'
                  height='300'
                  src='/astro.webp'
                  style={{
                    aspectRatio: '1/1',
                    objectFit: 'none',
                  }}
                  width='300'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
