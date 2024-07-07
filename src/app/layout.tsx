import { Favicon, Footer, Header } from '@/components'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev Portfolio',
  description:
    'Portfolio App, built with Next.js, TypeScript and framer motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
        <Favicon />
      </head>
      <body className={inter.className}>
        <div>
          <Header />
          <main className='bg-page-gradient pt-navigation-height'>
            {children}
          </main>
          <Footer />
        </div>
        <Toaster
          position='top-right'
          toastOptions={{
            classNames: {
              title: 'primary-text',
            },
          }}
        />
      </body>
    </html>
  )
}
