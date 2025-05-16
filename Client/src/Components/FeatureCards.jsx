import * as Icons from 'lucide-react'

const FeatureCards = ({featuresCards}) => {
  return (
   
    <div className='relative flex flex-col md:flex-row py-7 md:py-16 flex-wrap w-full items-center justify-center '>
                    <div className='md:block hidden absolute -left-[30%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />
                    {featuresCards.map((card, index) => {
                        const LucideIcon = Icons[card.icon]
                        return (
                            <div key={index} className='flex flex-col gap-6 w-96 p-6 md:border-none text-white'>
                                <LucideIcon size={'34px'} />
                                <h4 className='font-semibold text-xl text-shadow-neutral-50 text-shadow-2xs'>{card.heading}</h4>
                                <p className='text-neutral-500'>{card.explaination}</p>
                                <hr className='md:hidden text-neutral-500 w-11/12' />
                            </div>
                        )
                    })}
    
    
                </div>
  )
}

export default FeatureCards