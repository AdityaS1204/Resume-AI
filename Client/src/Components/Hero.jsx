import { ChevronRight, Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dashboard } from '../assets'
import '../../src/index.css'

const Hero = () => {
  return (
    <section className='w-full relative flex justify-center'>
      <div className="absolute inset-0 top-0 bg-[linear-gradient(to_right,rgba(22,22,22,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,22,22,0.9)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_12%,#000_70%,transparent_100%)]
bg-[size:4rem_4rem] h-[100vh] "/>

      <div className=" z-10 pt-28 relative w-full flex flex-col items-center mx-auto px-4 ">
        <div className='flex flex-col justify-center items-center w-11/12 md:w-7/12'>

          <button className="border border-neutral-500 shadow-2xl  py-1 px-0 text-white w-60 rounded-2xl backdrop-blur-2xl overflow-hidden flex justify-center items-center gap-2.5">
            <span className="absolute left-0 h-2 top-8 w-60 rounded-2xl bg-indigo-600 blur-lg"></span>
            <Sparkles strokeWidth={'2px'} size={'20px'} />For Developers Only <ChevronRight strokeWidth={'2px'} size={'20px'} />
          </button>

          <h1 className='text-white leading-10 md:leading-20 md:text-6xl text-4xl font-semibold pt-8 text-center'>Land Your Next Dev Role with an ATS-Optimized Resume</h1>
          {/* <span className='absolute top-54 right-13 bg-indigo-600 h-16 w-76 -z-10'></span> */}
          <p className='text-neutral-400 md:text-xl text-lg text-center py-7'>Built specifically for developers and software engineers. Auto-import your GitHub projects, match tech stack keywords, and pass ATS filters with ease.</p>

          <div className='hidden lg:flex  gap-4 py-2 px-4 items-center rounded-full bg-neutral-400/70 border-t-2 border-neutral-300 mt-7'>
            <p className=' text-white text-lg'>🚀 Build a developer resume that gets past ATS filters!</p>
            <button className='text-white bg-indigo-600 rounded-full px-2 py-1 border border-blue-400/90'><Link to={'/Signup'} className='flex justify-center items-center gap-2'>Get Started <ArrowRight size={'20px'} strokeWidth={'2px'} /></Link></button>
          </div>
        </div>
        <div className='relative md:py-20 py-7  w-full flex items-center'>          
          <div className='top-1/12 left-[16%] md:w-3/4 md:h-3/4 inset-0 md:blur-[10rem] blur-[8rem] gradient absolute -z-10'></div>
          <div className='flex justify-center '>
          <img src={dashboard} alt="dashboard" className='md:w-9/12 w-11/12 z-10 rounded-3xl ring-0 ring-offset-neutral-400 ring-offset-1 backdrop-blur-3xl p-3'/>
          </div>
          </div>
      </div>

    </section>
  )
}

export default Hero