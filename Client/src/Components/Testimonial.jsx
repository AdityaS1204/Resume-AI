import TestimonialCard from "./TestimonialCard"
import Marquee from "react-fast-marquee";


const Testimonial = () => {


    const reviews = [
        {
            user: "Aarav Mehta",
            username: "aarav.codes",
            review: "Resume AI helped me tailor my resume exactly to the job description — landed 3 interviews in a week!"
        },
        {
            user: "Sanya Kapoor",
            username: "sanya.dev",
            review: "Creating resumes used to take me hours. Now it’s done in minutes, and it actually gets past ATS!"
        },
        {
            user: "Rohan Verma",
            username: "rohan_jobs",
            review: "I created 5 different resumes using Resume AI to apply for different roles — insanely useful and fast."
        },
        {
            user: "Nisha Patil",
            username: "nishapatil",
            review: "Loved the cover letter feature. It really makes you stand out with minimal effort!"
        },
        {
            user: "Devika Sharma",
            username: "devikash",
            review: "I was skeptical at first, but Resume AI is seriously a game changer. My resume finally feels professional."
        },
        {
            user: "Kabir Rao",
            username: "kabirrao_",
            review: "The personalized resume generation using job role and JD is genius. Definitely helped me get noticed."
        }
    ];







    return (
        <section className='flex relative flex-col items-center w-full overflow-x-clip mt-20'>
             <div className='md:block hidden absolute -left-[30%] -top-48 gradient h-[400px] w-[400px] blur-[9rem]' />
            <div className=" md:w-8/12 w-9/12 flex flex-col items-center gap-6">
                <div className="bg-[#0a0720] ring ring-blue-400 py-1 px-2 rounded-2xl ring-offset-2 ring-offset-blue-600 text-center flex justify-center w-32 text-white">Our Customers</div>

                {/* heading */}
                <h3 className="text-white font-semibold md:text-4xl text-2xl text-center">What People Are Saying</h3>
                {/* p sub heading */}
                <p className="text-neutral-500 text-lg text-center md:w-7/12 w-full">See how Resume AI is helping job seekers land interviews.
                    Here’s what real users are sharing on Twitter</p>
            </div>
            <div className="flex flex-col gap-4 mt-20 w-9/12 overflow-x-clip">
                <Marquee pauseOnHover  speed={50} gradient gradientColor="#03070E" gradientWidth={200} className="" direction="left" autoFill loop={0}>
                    <div className="flex gap-3">
                        {reviews.map((review, index) => (
                            <TestimonialCard key={index} review={review} />

                        ))}
                    </div>
                </Marquee>
                <Marquee pauseOnHover gradient gradientColor="#03070E" gradientWidth={200} loop={0} autoFill direction="right">
                    <div className="flex gap-3">
                        {reviews.map((review, index) => (
                            <TestimonialCard key={index} review={review} />

                        ))}
                    </div>
                </Marquee>

            </div>
        </section>
    )
}

export default Testimonial