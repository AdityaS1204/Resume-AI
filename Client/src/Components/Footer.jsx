import { Link } from "react-router-dom";
import { Logo } from "./index"

const Footer = () => {

    const footerLinks = {
        Product: [
            "Features",
            "Pricing",
            "Testimonials",
            "Integration",
            
        ],
        Social: [
            "Facebook",
            "Instagram",
            "Twitter",
            "LinkedIn",
        ],
        Company: [
            "About Us",
            "Privacy Policy",
            "Terms & Conditions",
        ],
    };




    return (
        <footer className='flex md:flex-row flex-col w-full mt-24 justify-center relative overflow-x-clip overflow-y-clip'>
            <div className='md:block hidden absolute -left-[20%] top-64 gradient h-[300px] w-[300px] blur-[9rem]' />
            <div className='md:block hidden absolute -right-[37%] top-64 gradient h-[400px] w-[400px] blur-[12rem]' />
            {/* <div className='md:block hidden absolute -left-[30%] top-44 gradient h-[400px] w-[400px] blur-[9rem]' /> */}
            <div className="md:w-9/12 w-full flex flex-col ">
                <hr className="text-neutral-700 mt-10 py-5" />
            <div className="flex items-center justify-around flex-col md:flex-row ">

                <div className=" w-48">
                    <Logo />
                    <p className="text-sm text-neutral-700">Create tailored, professional resumes that get past filters and into interviews.</p>
                </div>
                <div className='flex md:flex-row md:gap-36 gap-5 flex-wrap text-white py-10
                '>
                    <div>
                        <ul>
                            <li className="font-semibold text-lg md:pb-2">Product</li>
                        {footerLinks.Product.map((item, index) => (
                            <li key={index} className="text-neutral-500"><Link>{item}</Link></li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <ul>
                             <li className="font-semibold text-lg md:pb-2">Socials</li>
                            {footerLinks.Social.map((item, index) => (
                                <li key={index} className="text-neutral-500">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul>
                             <li className="font-semibold text-lg md:pb-2">Company</li>
                            {footerLinks.Company.map((item, index) => (
                                <li key={index} className="text-neutral-500">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
                <hr className="text-neutral-500 pt-5 pb-5"/>
                <p className="text-neutral-600 mb-11">© 2025 Resume AI INC. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer