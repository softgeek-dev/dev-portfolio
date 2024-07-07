'use client'
import { MotionSubtitle, MotionTitle, SectionDivider } from '@/components'
import { Component } from 'lucide-react'
import React, { FC } from 'react'

import {
  Css,
  Express,
  Html,
  Javascript,
  Mongodb,
  NextJs,
  Nodejs,
  ReactJs,
  Tailwind,
  Typescript,
} from './icons'

interface SkillsProps {}

export const Skills: FC<SkillsProps> = () => (
  <>
    <SectionDivider icon={<Component className="text-primary-text w-5" />} />
    <div className="flex flex-col text-center">
      <MotionTitle title="Skills That Empower Me" />
      <MotionSubtitle
        subtitle="Javascript Full stack web developer with background knowledge of MERN
          with Redux/Saga/Thunk, along with a knack of building applications
          with utmost efficiency and performance. Strong professional with
          B.Tech in computer engineering and willing to be an good asset for an
          organization."
      />
      <div className="grid grid-cols-3 md:grid-cols-5 justify-center gap-4">
        <div className="flex justify-center">
          <Javascript />
        </div>
        <div className="flex justify-center">
          <ReactJs />
        </div>
        <div className="flex justify-center">
          <NextJs />
        </div>
        <div className="flex justify-center">
          <Express />
        </div>
        <div className="flex justify-center">
          <Nodejs />
        </div>
        <div className="flex justify-center h-[100px]">
          <Typescript />
        </div>
        <div className="flex justify-center h-[100px]">
          <Html />
        </div>
        <div className="flex justify-center h-[100px]">
          <Css />
        </div>
        <div className="flex justify-center h-[100px]">
          <Tailwind />
        </div>
        <div className="flex justify-center h-[100px]">
          <Mongodb />
        </div>
      </div>
    </div>
  </>
)
