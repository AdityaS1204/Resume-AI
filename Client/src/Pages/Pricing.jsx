import React,{useState} from 'react'
import { Footer, Navbar } from '../Components'
import { PricingCard } from '../Components/PricingCard'
import { pricingDetail } from '../Constants/Index'
import { items } from '../Constants/Index'
import {ChevronUp} from 'lucide-react'

const Pricing = () => {


 const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="min-h-screen w-full relative bg-[#03070F]">
      <Navbar />
      <div className='w-full flex justify-center mt-20 relative overflow-x-clip'>
        <div className='md:block hidden absolute -right-[20%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />
        <div className='md:block hidden absolute -left-[20%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />

        <div className='w-6/12'>
          <h1 className='text-5xl font-bold text-center text-white leading-13'>Unlock the right plan
            for your next job application</h1>
          <p className='text-center text-neutral-500 leading-7 mt-7 '>Whether you're just starting out or sending out tailored resumes at scale, we’ve got a plan built for your goals. Pay monthly or boost your limits with affordable resume credits.</p>
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <div className='flex flex-col md:flex-row py-20 w-8/12'>
          {pricingDetail.map((plan, index) => (
            <div className="flex w-full m-2" key={index}>
              {(index == 1) ? <PricingCard pricingDetail={plan} buttonStyle={"bg-indigo-700 text-white"} priceStyle={'text-white'} borderStyle={"border border-indigo-800 "} /> : <PricingCard index={index} pricingDetail={plan} borderStyle={'border border-neutral-500'} buttonStyle={'bg-neutral-50 text-black'} />}
            </div>
          ))
          }
        </div>
      </div>
      <div className='flex justify-center items-center w-full flex-col mt-10'>
        <div className='w-6/12'>
          <h4 className='text-center text-white text-2xl font-semibold'>Need More?</h4>
          <p className='text-center text-neutral-500 text-lg'>📈 Hit your monthly limit? You can easily top up your account with resume credits — starting at just ₹10.1 per resume on the Pro and Plus plan.</p>
        </div>
        <div className=' w-10/12 mt-20'>
          <h5 className='text-white text-center text-4xl font-semibold'>FAQ(Frequently Asked Questions)</h5>
          {/* accordian */}

          <div className="w-8/12 mx-auto mt-10 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="border-b border-gray-300 ">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => toggle(index)}
                >
                  <span className="font-medium text-white text-xl">{item.title}</span>
                  <span className="text-xl"><ChevronUp color='white' className={`${openIndex == index ? 'rotate-180 duration-500':''}`}/></span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-lg text-neutral-500">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Pricing