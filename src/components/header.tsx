'use client'
import { Button, Container, Logo } from '@/components'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

  useEffect(() => {
    const html = document.querySelector('html')
    if (html) html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen)
  }, [hamburgerMenuIsOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false)

    window.addEventListener('orientationchange', closeHamburgerNavigation)
    window.addEventListener('resize', closeHamburgerNavigation)

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation)
      window.removeEventListener('resize', closeHamburgerNavigation)
    }
  }, [setHamburgerMenuIsOpen])

  const scrollToSection = (id: string) => {
    setHamburgerMenuIsOpen(false)
  }

  return (
    <header className='fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]'>
      <Container className='flex h-navigation-height'>
        <Link
          className='flex items-center text-nowrap text-lg mr-10 text-[#c178f1]'
          href='/'
          onClick={() => setHamburgerMenuIsOpen(false)}
          aria-label='Go to home'
        >
          <Logo />
        </Link>

        <div
          className={cn(
            'transition-[visibility] md:visible',
            hamburgerMenuIsOpen ? 'visible' : 'delay-500 invisible'
          )}
        >
          <nav
            className={cn(
              'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
              hamburgerMenuIsOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[-100vw] opacity-0'
            )}
          >
            <ul
              className={cn(
                'flex h-full flex-col md:flex-row md:items-center md:[&_li]:ml-6 [&_li]:border-grey-dark md:[&_li]:border-none',
                'ease-in [&_a]:text-grey [&_a:focus]:text-white [&_a:hover]:text-white [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:justify-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors',
                hamburgerMenuIsOpen && '[&_a]:translate-y-0 pt-15'
              )}
            >
              <li onClick={() => scrollToSection('skills')}>
                <Link href='#skills'>Skills</Link>
              </li>
              <li onClick={() => scrollToSection('projects')}>
                <Link href='#projects'>Projects</Link>
              </li>
              <li onClick={() => scrollToSection('testimonials')}>
                <Link href='#testimonials'>Testimonials</Link>
              </li>
              <li onClick={() => scrollToSection('contact')}>
                <Link href='#contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='ml-auto flex h-full items-center'>
          <Link className='mr-6 text-sm' href='#'>
            Log in
          </Link>
          <Button href='#'>Sign up</Button>
        </div>

        <button
          className='ml-6 md:hidden'
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className='sr-only'>Toggle menu</span>
          {hamburgerMenuIsOpen ? <X /> : <Menu />}
        </button>
      </Container>
    </header>
  )
}
