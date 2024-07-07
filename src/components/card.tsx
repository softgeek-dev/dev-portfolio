'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div className="relative overflow-hidden rounded-lg border border-transparent-white bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient">
        {children}
      </div>
    </motion.div>
  )
}
