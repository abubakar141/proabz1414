import React from 'react'
import HeroSection from './components/Hero'
import { BackgroundGradientDemo } from '@/components/ui/BackgroundGradientDemo'
import { AuroraBackground } from './components/aurora-background'
import { CardHoverEffectDemo } from './components/Hover'
import Skills from './components/Skills' 
import { GlowingStarsBackgroundCard } from './components/glowing-stars'
import SkillsCard from './components/Skills'
import ContactForm from './components/ContactForm'
const page = () => {
  return (
    <div className='bg-black'>
      <HeroSection />
   <br /><br /><br /><br /><br /><br /><br />
  <SkillsCard />
  <br /><br /><br />
  <CardHoverEffectDemo />
  <br /><br /><br /><br />
  <ContactForm />
    </div>
  )
}

export default page
