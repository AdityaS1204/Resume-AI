import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setIsMobileDrawerOpen(!isMobileDrawerOpen)
    }


    return (
        <nav className='sticky top-0 h-14 w-full border-b-2 border-neutral-800 text-shadow-violet-100 backdrop-blur-3xl p-2 flex justify-between md:px-30 items-center z-40'>
            <div className="logo p-3 flex gap-3">
                <svg class="w-8 h-8" width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="186" height="186" rx="36" fill="url(#paint0_linear_12_165)"></rect><path d="M40.4109 85.8641C39.7491 86.1624 39 85.6783 39 84.9524V60.6142C39 60.2374 39.2117 59.8926 39.5478 59.7223L73.9958 42.2557C74.3087 42.097 74.6818 42.1139 74.979 42.3002L111.452 65.1567C111.786 65.3656 112.211 65.3596 112.538 65.1414L144.945 43.5365C145.61 43.0934 146.5 43.5698 146.5 44.3685V70.4449C146.5 70.7902 146.322 71.111 146.029 71.2936L112.513 92.1801C112.198 92.3768 111.799 92.3821 111.478 92.194L74.9458 70.7615C74.6662 70.5975 74.3244 70.5792 74.0288 70.7124L40.4109 85.8641Z" fill="white"></path><path d="M40.4109 138.364C39.7491 138.662 39 138.178 39 137.452V113.614C39 113.237 39.2117 112.893 39.5478 112.722L74.0014 95.2528C74.3113 95.0957 74.6804 95.1106 74.9765 95.2923L111.455 117.666C111.787 117.869 112.208 117.861 112.532 117.645L144.945 96.0365C145.61 95.5934 146.5 96.0698 146.5 96.8685V123.438C146.5 123.787 146.318 124.111 146.02 124.292L112.51 144.689C112.196 144.881 111.802 144.884 111.485 144.698L74.9458 123.262C74.6662 123.097 74.3244 123.079 74.0288 123.212L40.4109 138.364Z" fill="white"></path><defs><linearGradient id="paint0_linear_12_165" x1="93" y1="0" x2="93" y2="186" gradientUnits="userSpaceOnUse"><stop stop-color="#2563EB"></stop><stop offset="1" stop-color="#153885"></stop></linearGradient></defs></svg>
                <p className='text-2xl font-bold text-white'>Resume AI</p>
            </div>
            <div className={`navItems md:flex items-center justify-around hover:text-neutral-400 hidden`}>
                <ul className='flex items-center justify-around gap-8 text-white '>
                    <li className=' hover:text-neutral-300'><NavLink to={'/'}>Home</NavLink></li>
                    <li className=' hover:text-neutral-300'><NavLink to={'/pricing'}>Pricing</NavLink></li>
                    <li className=' hover:text-neutral-300'><NavLink to={'/features'}>Features</NavLink></li>
                    <li className=' hover:text-neutral-300'><NavLink to={'/ats-score'}>ATS Score</NavLink></li>
                </ul>
            </div>
            <div className={`md:flex gap-3 hidden `}>
                <Link to={'/login'}> <button className='hover:bg-neutral-800/90 hover:rounded-lg px-2 py-1.5 text-white'>Login</button></Link>
                <Link to={'/signup'}> <button className='bg-indigo-600 hover:bg-indigo-700 hover:rounded-lg px-2 py-1.5 text-white rounded-lg'>Get Started</button></Link>               
            </div>

            {isMobileDrawerOpen && (
                <div className='fixed top-14 w-full flex flex-col backdrop-blur-3xl bg-[#03070F] right-0 py-5 border rounded-b-2xl border-white'>
                    <div className={`navItems flex items-center justify-around hover:text-neutral-400`}>
                        <ul className='flex flex-col items-center justify-around gap-3 text-white '>
                            <li className=' hover:text-neutral-300'><NavLink to={'/pricing'}>Pricing</NavLink></li>
                            <li className=' hover:text-neutral-300'><NavLink to={'/about'}>About</NavLink></li>
                            <li className=' hover:text-neutral-300'><NavLink to={'/features'}>Features</NavLink></li>
                            <li className=' hover:text-neutral-300'><NavLink to={'/ats-score'}>ATS Score</NavLink></li>
                        </ul>
                    </div>
                    <div className={`flex gap-3 justify-center pt-4`}>
                       <Link to={'/login'}> <button className='hover:bg-neutral-800/90 hover:rounded-lg px-2 py-1.5 text-white'>Login</button></Link>
                <Link to={'/signup'}> <button className='bg-indigo-600 hover:bg-indigo-700 hover:rounded-lg px-2 py-1.5 text-white rounded-lg'>Get Started</button></Link>
                    </div>
                </div>
            )}
            <div className='lg:hidden flex'>
                <button onClick={toggleNavbar}>
                    {!isMobileDrawerOpen ? <Menu color='white' /> : <X color='white' />}
                </button>
            </div>

        </nav>
    )
}

export default Navbar