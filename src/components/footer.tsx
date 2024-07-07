import { Button, Container, Logo, Subtitle } from '@/components'
import { Input } from '@/components/ui/input'
import { Github, Slack, Twitter } from 'lucide-react'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Linear Method', href: '#' },
      { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'GitHub', href: '#' },
    ],
  },
]

export const Footer = () => (
  <footer className='mt-12 border-t border-transparent-white pt-[5.6rem] text-sm'>
    <Container className='flex flex-col justify-between lg:flex-row'>
      <div>
        <div className='flex h-full flex-row justify-between lg:flex-col'>
          <div className='flex items-center text-[#c178f1]'>
            <Logo />
          </div>
          <div className='mt-auto flex space-x-4 text-grey'>
            <Twitter className='w-5 h-5' />
            <Github className='w-5 h-5' />
            <Slack className='w-5 h-5' />
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='grid grid-cols-2 md:grid-cols-4 '>
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className='mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]'
            >
              <p className='mb-3 font-medium'>{column.title}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className='[&_a]:last:mb-0'>
                    <Link
                      className='mb-3 block text-grey transition-colors hover:text-off-white'
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex gap-2 pt-9 md:pt-9 flex-col md:flex-row'>
          <Subtitle className='mr-3 -my-1 md:my-1'>
            Subscribe to our newsletter
          </Subtitle>
          <div className='inline-flex'>
            <Input
              placeholder='Email'
              className='text-off-white w-full md:w-[300px] bg-white bg-opacity-10 focus:ring-transparent-white border border-transparent-white'
            />
            <Button
              variant='primary'
              className='-ml-1 bg-primary hover:bg-primary-hover transition-colors text-off-white px-6 py-[18px] rounded-l-none rounded-r-md '
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Container>
    <hr className='mt-2 border-t border-transparent-white' />
    <div className='text-center text-grey my-2 md:my-5 text-[10px] font-thin md:text-sm'>
      Brought to you by{' '}
      <Link
        href='https://devram.in'
        className='underline underline-offset-4'
        target='_blank'
      >
        DevRam
      </Link>
      . Made with ❤️ in India.
    </div>
  </footer>
)
