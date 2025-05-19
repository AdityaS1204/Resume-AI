import { PricingCard } from "./PricingCard"
const Pricing = () => {


    const pricingDetail = [
        {
            plan: "Starter",
            price: "Free",
            description:"Perfect for trying out",
            resumesIncluded: 3,
            buttonTitle: "Start for free",
            costPerResume: "Free (0¢ per resume)",
            features: [
                "Create up to 3 AI-generated resumes",
                "Access to basic templates",
                "Download in PDF format",
                "ATS-optimized formatting",
                "Limited customization options",
                "Basic job description matching"
            ],
            creditSystem: null
        },
        {
            plan: "Plus",
            price: "₹99/month",
            description:"For active job seekers",
            resumesIncluded: 10,
            buttonTitle: "Upgrade to Plus",
            costPerResume: "That's Just 9.9 per resume",
            features: [
                "Create up to 10 AI-generated resumes",
                "Access to all templates",
                "Generate cover letters with AI",
                "Enhanced customization options",
                "Advanced job description matching",
                "Priority email support"
            ],
            creditSystem: {
                enabled: true,
                description: "Need more? Use credits to generate extra resumes",
                buyCredit:'5 credit at just 55 (10.1/resume)',
                
                note: "*Note: 1 credit = 1 resume "
            }
        },
        {
            plan: "Pro",
            price: "₹199/month",
            description:"For serious professionals",
            resumesIncluded: 25,
            buttonTitle: "Upgrade to Pro",
            costPerResume: "Only 76¢ per resume (included)", // 19/25 = 0.76
            features: [
                "Create up to 25 AI-generated resumes",
                "Unlimited cover letter generation",
                "Full template library access",
                "Premium customization tools",
                "Deep AI-driven job matching",
                "Access to resume analytics",
                "Priority support & early feature access"
            ],
            creditSystem: {
                enabled: true,
                description: "Run out of limits? Add more resumes with credits",
                 buyCredit:'5 credit at just 50 (10/resume)',
                costPerCredit: "$0.49/credit",
                costPerResume: "Only 49¢ per additional resume",
                note: "*Note 1 credit = 1 resume"
            }
        }
    ];


    return (
        <section className='flex relative flex-col items-center w-full overflow-x-clip'>
                <div className='md:block hidden absolute -right-[30%] -top-10 gradient h-[400px] w-[400px] blur-[9rem]' />
            <div className=" md:w-8/12 w-10/12 flex flex-col items-center gap-6">
                <div className="bg-[#0a0720] ring ring-blue-400 py-0 px-2 rounded-2xl ring-offset-2 ring-offset-blue-600 text-center flex justify-center w-20 text-white">Pricing</div>
            
                {/* heading */}
                <h3 className="text-white font-semibold md:text-4xl text-2xl text-center">Build Smarter. Apply Faster. Land<br /> That Dream Job.</h3>
                {/* p sub heading */}
                <p className="text-neutral-500 text-lg text-center md:w-5/12 w-full">Choose the plan that fits your hustle — free to start, powerful when you’re ready to go pro!</p>
            </div>
            <div className="flex md:flex-row flex-col py-18">
                {
                    pricingDetail.map((plan, index) => (
                        <div className="flex w-full m-2" key={index}>
                            {(index == 1) ? <PricingCard pricingDetail={plan} buttonStyle={"bg-indigo-700 text-white"} priceStyle={'text-white'} borderStyle={"border border-indigo-800 "} /> : <PricingCard index={index} pricingDetail={plan} borderStyle={'border border-neutral-500'} buttonStyle={'bg-neutral-50 text-black'} />}
                        </div>
                    ))

                }
            </div>

        </section>
    )
}

export default Pricing