import feature from '../assets/index'
import { featuresCards} from '../Constants/Index'
import { FeatureCards } from "./index";

const Features = () => {


    return (
        <section className='text-white w-full max-w-full overflow-x-clip flex justify-center items-center relative md:py-15 py-17  mb-10 flex-col '>
            <div className='md:block hidden absolute -right-[30%] top-10 gradient h-[400px] w-[400px] blur-[9rem]' />
            <div className=" md:w-8/12 w-9/12 flex flex-col items-center gap-6">
                <div className="bg-[#0a0720] ring ring-blue-400 py-0 px-1 rounded-2xl ring-offset-2 ring-offset-blue-600 text-center flex justify-center w-24">Features</div>
                {/* heading */}
                <h3 className="text-white font-semibold md:text-4xl text-2xl text-center">Discover our powerful<br /> features</h3>
                {/* p sub heading */}
                <p className="text-neutral-500 text-lg text-center">Turn your career vision into a standout resume — effortlessly.</p>
                <img src={feature} alt="feature-image" className='md:size-96 size-80' />
            </div>
            <FeatureCards featuresCards={featuresCards}/>
        </section>
    )
}

export default Features