import React, { useState, useEffect } from 'react'
import { Footer, Navbar } from '../Components'
import { PricingCard } from '../Components/PricingCard'
import { ChevronUp, Loader2, Sparkles, ShieldCheck, Zap } from 'lucide-react'
import { isIndianUser } from '../utils/pricingUtils'
import { getPricingForUser, faqItems } from '../config/pricing'

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [pricingData, setPricingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    detectAndSetPricing();
  }, []);

  const detectAndSetPricing = async () => {
    try {
      const isIndia = await isIndianUser();
      const pricing = getPricingForUser(isIndia);
      setPricingData(pricing);
    } catch (error) {
      console.error('Failed to load pricing:', error);
      // Fallback to USD
      const pricing = getPricingForUser(false);
      setPricingData(pricing);
    } finally {
      setLoading(false);
    }
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  if (loading) {
    return (
      <section className="min-h-screen w-full relative bg-[#03070F] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-indigo-500" size={40} />
          <p className="text-white text-lg">Loading pricing...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full relative bg-[#03070F]">
      <Navbar />

      <div className='w-full flex justify-center mt-20 relative overflow-x-clip'>
        <div className='md:block hidden absolute -right-[20%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />
        <div className='md:block hidden absolute -left-[20%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />

        <div className='md:w-6/12 w-10/12'>
          <h1 className='md:text-5xl text-3xl font-bold text-center text-white leading-tight'>
            Unlock the right plan for your next job application
          </h1>
          <p className='text-center text-neutral-500 leading-7 mt-7'>
            Whether you're just starting out or sending out tailored resumes at scale, we've got a plan built for your goals.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col md:flex-row py-20 md:w-8/12 w-10/12'>
          {pricingData?.plans.map((plan, index) => (
            <div className="flex w-full m-2" key={index}>
              {index === 1 ? (
                <PricingCard 
                  pricingDetail={plan} 
                  buttonStyle={"bg-indigo-700 text-white"} 
                  priceStyle={'text-white'} 
                  borderStyle={"border-2 border-indigo-600 shadow-lg shadow-indigo-900/50"} 
                />
              ) : (
                <PricingCard 
                  index={index} 
                  pricingDetail={plan} 
                  borderStyle={'border border-neutral-500'} 
                  buttonStyle={'bg-neutral-50 text-black'} 
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center w-full flex-col mt-10'>
        <div className='md:w-6/12 w-10/12'>
          <h4 className='text-center text-white text-2xl font-semibold mb-2'>
            All Plans Include
          </h4>
          <p className='text-center text-neutral-500 text-sm mb-8'>
            Every plan comes with these powerful features
          </p>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-6'>
            <div className='bg-indigo-950/30 border border-neutral-700/50 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all group'>
              <div className='w-14 h-14 mx-auto mb-4 bg-indigo-600/20 rounded-full flex items-center justify-center group-hover:bg-indigo-600/30 transition-all'>
                <Sparkles className='text-indigo-400' size={28} />
              </div>
              <p className='text-white font-semibold mb-2'>AI-Powered Generation</p>
              <p className='text-neutral-400 text-sm'>Smart resume creation with job-specific optimization</p>
            </div>
            <div className='bg-indigo-950/30 border border-neutral-700/50 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all group'>
              <div className='w-14 h-14 mx-auto mb-4 bg-indigo-600/20 rounded-full flex items-center justify-center group-hover:bg-indigo-600/30 transition-all'>
                <Zap className='text-indigo-400' size={28} />
              </div>
              <p className='text-white font-semibold mb-2'>Unlimited ATS Checks</p>
              <p className='text-neutral-400 text-sm'>Scan your resume as many times as you need</p>
            </div>
            <div className='bg-indigo-950/30 border border-neutral-700/50 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all group'>
              <div className='w-14 h-14 mx-auto mb-4 bg-indigo-600/20 rounded-full flex items-center justify-center group-hover:bg-indigo-600/30 transition-all'>
                <ShieldCheck className='text-indigo-400' size={28} />
              </div>
              <p className='text-white font-semibold mb-2'>Secure & Private</p>
              <p className='text-neutral-400 text-sm'>Your data is encrypted and never shared</p>
            </div>
          </div>
        </div>
        
        <div className='w-10/12 mt-20'>
          <h5 className='text-white text-center md:text-4xl text-3xl font-semibold'>
            Frequently Asked Questions
          </h5>

          <div className="md:w-8/12 w-full mx-auto mt-10 space-y-2">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-neutral-700 bg-neutral-900/30 rounded-lg">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => toggle(index)}
                >
                  <span className="font-medium text-white md:text-xl text-lg pr-4">{item.title}</span>
                  <span className="text-xl flex-shrink-0">
                    <ChevronUp 
                      color='white' 
                      className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-base text-neutral-400 leading-relaxed">
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