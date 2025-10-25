import { feature } from '../assets'
import { featuresCards} from '../Constants/Index.js'
import { FeatureCards } from "./index";

const Features = () => {


    return (
        <section className='text-white w-full max-w-full overflow-x-clip flex justify-center items-center relative md:py-15 py-17  mb-10 flex-col '>
            <div className='md:block hidden absolute -right-[30%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />
            <div className=" md:w-8/12 w-9/12 flex flex-col items-center gap-6">
                <div className="bg-[#0a0720] ring ring-blue-400 py-0 px-1 rounded-2xl ring-offset-2 ring-offset-blue-600 text-center flex justify-center w-24">Features</div>
                {/* heading */}
                <h3 className="text-white font-semibold md:text-4xl text-2xl text-center">Built for Developers<br /> by Developers</h3>
                {/* p sub heading */}
                <p className="text-neutral-500 text-lg text-center">Everything you need to showcase your technical skills and land your next dev role.</p>
                <img src={feature} alt="feature-image" className='md:size-96 size-80' />
            </div>
            <FeatureCards featuresCards={featuresCards} style={'rounded-3xl hover:shadow-2xl shadow-indigo-600/20 bg-indigo-950/30'}/>
        </section>
    )
}

export default Features