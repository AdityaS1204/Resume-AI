import React from 'react'
import { Navbar, Hero, Process } from '../Components/index.js'

const LandingPage = () => {
  return (
    <section className="min-h-screen w-full bg-[#03070F]">
      <Navbar />
      <Hero />
      <Process/>
    </section>
  )
}

export default LandingPage