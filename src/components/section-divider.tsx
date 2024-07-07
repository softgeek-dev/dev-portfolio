'use client'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export const SectionDivider = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className="flex justify-center items-center my-16">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '350px' }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="w-full h-[2px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_90%,transparent)]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        animate={{ rotate: [null, 360, 0] }}
        className="relative"
      >
        {icon}
        <span className="absolute left-0 top-0 h-full w-full animate-image-glow z-3"></span>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '350px' }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="w-full h-[2px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_10%,transparent)]"
      ></motion.div>
    </div>
  )
}
