import Autoplay from 'embla-carousel-autoplay'

import { Rating } from '@/components'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { useRef } from 'react'

type TestimonialCarouselProps = {
  testimonials: {
    userId: string
    profilePicture: string
    userName: string
    userDesignation: string
    userComment: string
    userRating: number
  }[]
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full max-w-4xl'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.userId}>
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <span className='object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]' />
              </div>
              <div className='p-3 md:p-8 w-full'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Image
                      alt='Profile picture'
                      className='rounded-full'
                      height='40'
                      src={testimonial.profilePicture}
                      style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                      }}
                      width='40'
                    />
                    <div className='ml-2'>
                      <div className='uppercase tracking-wide text-md text-black dark:text-white font-semibold'>
                        {testimonial.userName}
                      </div>
                      <div className='text-gray-400 dark:text-gray-300'>
                        {testimonial.userDesignation}
                      </div>
                    </div>
                  </div>
                </div>
                <p className='text-sm mt-4 text-gray-500 dark:text-gray-300'>
                  {testimonial.userComment}
                </p>
                <div className='flex mt-6 justify-between items-center'>
                  <div className='flex space-x-4 text-gray-400 dark:text-gray-300'>
                    {/* rating component */}
                    <Rating rating={testimonial.userRating} />
                  </div>
                  <div className='hidden md:block text-gray-400 dark:text-gray-300'>
                    Jan 02, 2024
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden md:block' />
      <CarouselNext className='hidden md:block' />
    </Carousel>
  )
}
