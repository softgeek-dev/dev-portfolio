import { Container, HeroSection } from '@/components'
import Contact from './_components/contact/contact'
import Projects from './_components/projects/projects'
import { Skills } from './_components/skills/skills'
import Testimonials from './_components/testimonials/testimonials'

export default function Home() {
  return (
    <Container className='pt-[5rem]'>
      <HeroSection />
      <section id='skills'>
        <Skills />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='testimonials'>
        <Testimonials />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </Container>
  )
}
