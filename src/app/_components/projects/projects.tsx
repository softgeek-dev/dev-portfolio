'use client'
import {
  Button,
  Card,
  MotionSubtitle,
  MotionTitle,
  SectionDivider,
} from '@/components'
import { motion } from 'framer-motion'
import { ArrowUpRight, Component } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'

type ProjectsProps = {
  title: string
  description: string
  image: string
  link: string
  tech: string[]
}

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'This is a short description of the first project. It showcases the use of technology and design principles.',
    image: '/projects/project1.png',
    link: '#',
    tech: ['React', 'Next', 'Tailwind'],
  },
  {
    title: 'Prompt Store',
    description:
      'This is a short description of the second project. It highlights innovative solutions and creative approaches.',
    image: '/projects/project2.png',
    link: '#',
    tech: ['React', 'Next', 'Tailwind'],
  },
  {
    title: 'Task Organizer',
    description:
      'This is a short description of the third project. It demonstrates expertise in a particular domain.',
    image: '/projects/project3.png',
    link: '#',
    tech: ['React', 'Next', 'Tailwind', 'Next'],
  },
]

const Project: FC<ProjectsProps> = ({
  title,
  description,
  image,
  link,
  tech,
}) => {
  return (
    <>
      <div className='relative'>
        <Image
          className='w-full'
          src={image}
          alt={title}
          quality={100}
          width={100}
          height={100}
        />
        <button className='absolute top-1 hover:bg-opacity-70 flex right-1 gap-1 scale-[0.8] cursor-pointer px-4 py-2 rounded-full bg-grey-dark bg-opacity-60'>
          <a
            href={link}
            target='_blank'
            className=' text-md font-bold text-white text-nowrap'
          >
            {title}
          </a>
          <ArrowUpRight className='text-[#c3c6eb] w-6 h-6' />
        </button>
      </div>
      <div className='p-3'>
        <p className='text-sm text-primary-text'>{description}</p>
        <div className='flex gap-1 mt-3'>
          {tech.map((tech, i) => (
            <Button variant='secondary' size='small' key={tech + i}>
              {tech}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

const Projects: FC = () => (
  <div
    className='translate-y-[-2rem] animate-fade-in opacity-0 [--animation-delay:180ms]  
    [transform:rotateX(360deg)] before:absolute before:bottom-0 before:right-0 before:h-full 
    before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(150px)]
  before:animate-image-glow'
  >
    <SectionDivider icon={<Component className='text-primary-text w-5' />} />
    <div className='flex flex-col items-center justify-center'>
      <MotionTitle title='Key Projects' />
      <MotionSubtitle subtitle='Here are some of my projects that I have worked on.' />
    </div>
    <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-3'>
      {projects.map((project) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ scale: [0, 1, 1] }}
          transition={{ duration: 1, ease: 'circIn' }}
          viewport={{ once: false }}
          key={project.title}
        >
          <Card>
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tech={project.tech}
            />
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
)

export default Projects
