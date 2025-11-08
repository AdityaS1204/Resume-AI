import { Navbar, Footer, FeatureCards } from "../Components"
import { featuresCards, additionalBenefits } from "../Constants/Index"
import { ArrowRight, Zap } from "lucide-react"
import { CTA } from "../assets"
import { Link } from "react-router-dom"

const Features = () => {
  return (
    <section className="min-h-screen w-full relative bg-[#03070F]">
      <Navbar />
      <div className="w-full flex flex-col items-center">

        <div className='w-full flex justify-center mt-20 relative overflow-x-clip'>
          <div className='md:block hidden absolute -right-[20%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />
          <div className='md:block hidden absolute -left-[20%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />

          <div className='w-6/12'>
            <h1 className='text-5xl font-bold text-center text-white leading-13'>Why Choose Our AI Resume Builder?</h1>
            <p className='text-center text-neutral-500 leading-7 mt-7 '>Resume optimization, simplified with AI. Get hired faster with smarter tools.</p>
          </div>
        </div>
        <div className='flex justify-center items-center mt-8'>
          <FeatureCards featuresCards={featuresCards} style={'rounded-3xl hover:shadow-2xl bg-indigo-950/30 shadow-indigo-600/20'}/>
        </div>
        <div className="w-7/12 flex items-center flex-col">
          <h5 className="text-white font-semibold text-4xl text-center pt-5">Additional Benifits</h5>
          <p className="text-neutral-500 text-center">{additionalBenefits.title}</p>
          <ul className="mt-6 text-white">
            {additionalBenefits.benefits.map((benifit, index) => (
              <li className="text-lg flex items-center gap-2.5" key={index}><Zap color="indigo" size={'20px'} fill="blue" />{benifit}</li>
            ))}
          </ul>
        </div>
        <div className="border border-neutral-500 h-80 w-8/12 rounded-3xl p-14 mt-24 backdrop-blur-2xl relative bg-[url(./assets/CTA.png)] object-contain">
        {/* <div className='md:block hidden absolute -left-[20%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' /> */}
            <h5 className="text-white text-3xl font-semibold">Create Your First Resume</h5>
            <p className="text-lg text-neutral-300">Build a tailored, professional resume with AI in minutes — no manual formatting, no guesswork.<br/>No credit card required • Unlimited edits • Instant PDF export</p>
           <Link to={'/signup'}> <button className="group mt-9 px-3 py-2 bg-indigo-100 flex items-center rounded-4xl gap-2">Get Started for free <span className="rounded-full px-2 py-2 bg-black overflow-hidden"><ArrowRight color="white" size={'20px'} className="group-hover:rotate-180 duration-500"/></span></button></Link>
        </div>
      </div>
      <Footer />

    </section >
  )
}

export default Features