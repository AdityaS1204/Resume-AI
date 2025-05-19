import { AtsImg } from '../assets'
import { Navbar, Features, FeatureCards, FileUpload, Footer } from '../Components'
import { motion } from 'motion/react'
import { atsFeatures } from '../Constants/Index'


const Ats = () => {
    return (
        <section className="min-h-screen w-full relative bg-[#03070F]">
            <div className="absolute inset-0 top-14  bg-[linear-gradient(to_right,rgba(22,22,22,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,22,22,0.9)_1px,transparent_1px)] 
bg-[size:4rem_4rem] h-[80vh] "/>

            <Navbar />
            <div className='flex flex-col  w-full mt-18 items-start justify-center relative z-10'>
                <div className='flex justify-center items-center flex-col md:flex-row gap-0'>
                    <div className='md:w-7/12 w-10/12 flex gap-8 flex-col md:text-left text-center'>
                        <h1 className='text-white text-4xl font-bold text-shadow-2xs text-shadow-amber-100'>Instantly Check Your Resume’s ATS Score</h1>
                        <p className='text-wrap text-neutral-50 text-xl md:w-9/12 w-full md:mb-0 mb-9 '>Upload your resume and see how well it performs against Applicant Tracking Systems. Make sure your resume never gets lost in the pile again.</p>
                    </div>
                    <div className='md:h-96 md:w-96 h-80 w-80 rounded-3xl relative bg-indigo-600'>
                        <div className='md:block hidden absolute -right-[10%] top-1 gradient h-[400px] w-[400px] blur-[7rem]' />
                        <motion.img
                            animate={{ y: [0, -8, 8] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'mirror',
                                ease: 'easeIn'
                            }}
                            src={AtsImg} className='hover:drop-shadow-2xl drop-shadow-indigo-100' alt="resume Image" />
                        {/* img */}
                    </div>

                </div>
                <div className='mt-34' >
                    <h3 className='md:text-4xl md:w-full w-10/12 text-3xl font-bold text-shadow-2xs text-center text-white text-shadow-neutral-200 '>Our ATS Resume Checker Looks For:</h3>
                    <FeatureCards featuresCards={atsFeatures} />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <FileUpload />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Ats