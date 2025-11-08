import { PricingCard } from "./PricingCard"
import { getPricingForUser } from "../config/pricing"
import { useEffect, useState } from "react"
import { isIndianUser } from "../utils/pricingUtils"
import { Loader2 } from "lucide-react"

const Pricing = () => {
    const [pricingData, setPricingData] = useState(null);
    const [loading, setLoading] = useState(true);

    const detectAndSetPricing = async () => {
        try {
            const isIndia = await isIndianUser();
            const pricing = getPricingForUser(isIndia);
            setPricingData(pricing);
        } catch (error) {
            console.error('Failed to load pricing:', error);
            // Fallback to USD pricing
            const pricing = getPricingForUser(false);
            setPricingData(pricing);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        detectAndSetPricing();
    }, []);

    if (loading) {
        return (
            <section className='flex relative flex-col items-center w-full overflow-x-clip py-20'>
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin text-indigo-500" size={40} />
                    <p className="text-white text-lg">Loading pricing...</p>
                </div>
            </section>
        );
    }

    if (!pricingData) {
        return (
            <section className='flex relative flex-col items-center w-full overflow-x-clip py-20'>
                <p className="text-white text-lg">Unable to load pricing. Please refresh the page.</p>
            </section>
        );
    }

    return (
        <section className='flex relative flex-col items-center w-full overflow-x-clip'>
            <div className='md:block hidden absolute -right-[30%] -top-10 gradient h-[400px] w-[400px] blur-[9rem]' />
            <div className="md:w-8/12 w-10/12 flex flex-col items-center gap-6">
                <div className="bg-[#0a0720] ring ring-blue-400 py-0 px-2 rounded-2xl ring-offset-2 ring-offset-blue-600 text-center flex justify-center w-20 text-white">Pricing</div>
            
                {/* heading */}
                <h3 className="text-white font-semibold md:text-4xl text-2xl text-center">Build Smarter. Apply Faster. Land<br /> That Dream Job.</h3>
                {/* p sub heading */}
                <p className="text-neutral-500 text-lg text-center md:w-5/12 w-full">Choose the plan that fits your hustle — free to start, powerful when you're ready to go pro!</p>
            </div>
            <div className="flex md:flex-row flex-col py-18">
                {pricingData.plans.map((plan, index) => (
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
        </section>
    )
}

export default Pricing