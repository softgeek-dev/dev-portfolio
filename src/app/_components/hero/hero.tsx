import { BgAnimate, Button, SocialMedia, Subtitle, Title } from '@/components'
import Image from 'next/image'

export const HeroSection = () => (
  <div className='flex justify-between flex-col-reverse md:flex-row '>
    <div className='flex-1 shrink-0 text-center md:text-left'>
      <Title className='text-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
        Hi, I&apos;m Ninja Coder.
        <br className='md:block' /> A web developer.
      </Title>
      <SocialMedia />
      <Subtitle className=' translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mt-5'>
        I work on the creation of dynamic, interactive, and user-friendly online
        experiences, ensuring that websites and applications meet functional
        requirements and adhere to industry standards.
      </Subtitle>
      <div className='flex gap-2 justify-center md:justify-start'>
        <Button
          className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'
          href='/'
          variant='secondary'
          size='medium'
        >
          <span>Hire Me</span>
        </Button>
        <Button
          className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'
          href='/'
          variant='primary'
          size='medium'
        >
          <span>Get Resume</span>
        </Button>
      </div>
    </div>
    <div
      className='relative flex justify-center items-center flex-1 shrink translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:180ms]  [transform:rotateX(25deg)] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]
      before:animate-image-glow'
    >
      <BgAnimate />
      <Image
        src='/profile-pic.png'
        alt='Portfolio'
        className=' rounded-full m-auto z-10'
        width={300}
        height={300}
      />
    </div>
  </div>
)
