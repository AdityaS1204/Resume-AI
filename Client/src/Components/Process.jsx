import { KeySquare,WandSparkles,Rocket } from 'lucide-react'
const Process = () => {
  return (
    <section className="text-white w-full flex justify-center md:pt-32 pt-18 mb-30 overflow-visible">
      <div className="md:w-7/12 w-9/12 flex flex-col items-center gap-6">
        {/* process button */}
        {/* <div className="process- w-32 rounded-full py-2"/> */}
        <div className="bg-[#0a0720] ring ring-blue-400 py-0 px-2 rounded-2xl ring-offset-2 ring-offset-blue-600 text-center w-28">The Process</div>
        {/* heading */}
        <h3 className="text-white font-semibold md:text-4xl text-2xl text-center">Build Your Job-Winning Resume<br/> in 3 Simple Steps</h3>
        {/* p sub heading */}
        <p className="text-neutral-500 text-lg text-center">Turn your career vision into a standout resume — effortlessly.</p>
        {/* process steps */}
        <div className='flex flex-col md:flex-row md:mt-16 mt-8 '>
          <div className='flex flex-col gap-6 w-96 p-6 md:border-none '>
            <KeySquare size={'34px'} />
            <h4 className='font-semibold text-xl'>SignUp</h4>
            <p className='text-neutral-500'>Create your free account to begin crafting your AI-powered resume.</p>
            <hr className='md:hidden text-neutral-500' />
          </div>
          <div className='flex flex-col gap-6 w-96 p-6 border-l-2 border-r-2 border-neutral-700'>
            <WandSparkles size={'34px'} />
            <h4 className='font-semibold text-xl'>Enter Your Info</h4>
            <p className='text-neutral-500'>Just share your details — our AI will handle the rest.</p>
            <hr className='md:hidden text-neutral-500' />
          </div>
          <div className='flex flex-col gap-6 w-96 p-6'>
            <Rocket  size={'34px'} />
            <h4 className='font-semibold text-xl'>Launch</h4>
            <p className='text-neutral-500'>Download or share your polished resume with just one click.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Process