'use client'
import { MotionSubtitle, MotionTitle, SectionDivider } from '@/components'
import { Component } from 'lucide-react'
import React, { FC } from 'react'
import { TestimonialCarousel } from './testimono-carousel'

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = () => {
  // TestimonialCarousel test data
  const testimonials = [
    {
      userId: '100101',
      profilePicture: '/testimonials/testimonial1.jpg',
      userName: 'John Doe',
      userDesignation: 'CEO, XYZ Company',
      userRating: 5,
      userComment:
        'Exceptional coding skills and a keen eye for design! Transformed our website into a user-friendly masterpiece. Highly recommend!',
    },
    {
      userId: '100102',
      profilePicture: '/testimonials/testimonial2.jpg',
      userName: 'Jane Smith',
      userDesignation: 'CTO, ABC Tech',
      userRating: 4,
      userComment:
        'A true professional! Built our web application with precision and delivered beyond expectations. A pleasure to work with.',
    },
    {
      userId: '100103',
      profilePicture: '/testimonials/testimonial3.jpg',
      userName: 'Alex Johnson',
      userDesignation: 'Founder, Tech Innovations',
      userRating: 4,
      userComment:
        'Incredible problem-solving skills and a knack for turning ideas into reality. The go-to developer for any web project.',
    },
    {
      userId: '100104',
      profilePicture: '/testimonials/testimonial5.jpg',
      userName: 'Emily Davis',
      userDesignation: 'Creative Director, Design Hub',
      userRating: 5,
      userComment:
        'Masterful at crafting responsive and visually stunning websites. Consistently exceeds project goals. A top-tier developer.',
    },
    {
      userId: '100105',
      profilePicture: '/testimonials/testimonial4.jpg',
      userName: 'Ryan Miller',
      userDesignation: 'COO, Digital Ventures',
      userRating: 4,
      userComment:
        'Reliable, creative, and an absolute joy to collaborate with. Elevated our online presence to new heights. Look no further for a skilled web developer.',
    },
  ]
  return (
    <>
      <SectionDivider icon={<Component className="text-primary-text w-5" />} />
      <div className="flex flex-col items-center">
        <MotionTitle title="Testimonials" />
        <MotionSubtitle subtitle="What people say about me.." />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </>
  )
}

export default Testimonials
