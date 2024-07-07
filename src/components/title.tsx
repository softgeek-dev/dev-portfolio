'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type TitleElementProps = {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className }: TitleElementProps) => {
  return (
    <h1
      className={cn(
        'text-gradient my-1 font-semibold text-3xl md:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  )
}

export const Subtitle = ({ children, className }: TitleElementProps) => {
  return (
    <p className={cn('mb-12 text-sm md:text-md text-primary-text', className)}>
      {children}
    </p>
  )
}

export const MotionTitle = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      viewport={{ once: false }}
      className="text-[20px] md:text-2xl mb-2 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
      style={{ transitionDelay: '200ms' }}
    >
      <Title>{title}</Title>
    </motion.div>
  )
}

export const MotionSubtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      viewport={{ once: false }}
      className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
      style={{ transitionDelay: '300ms' }}
    >
      <Subtitle>{subtitle}</Subtitle>
    </motion.div>
  )
}
