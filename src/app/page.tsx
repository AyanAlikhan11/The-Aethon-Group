// app/page.tsx
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import CTABanner from '@/components/sections/CTABanner'



export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <CTABanner />
      <Contact />
    </>
  )
}