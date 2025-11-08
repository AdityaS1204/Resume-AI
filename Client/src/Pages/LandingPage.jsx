import {featuresCards}  from '../Constants/Index.js'
import { Navbar, Hero, Process, Features,Pricing, Testimonial, Footer } from '../Components/index.js'

const LandingPage = () => {
  return (
    <section className="min-h-screen w-full bg-[#03070F]">
      <Navbar />
      <Hero />
      <Process/>
      <Features featuresCards={featuresCards}/>
      <Pricing/>
      <Testimonial/>
      <Footer/>

    </section>
  )
}

export default LandingPage