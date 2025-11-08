import { useState } from "react"
import { useForm } from "react-hook-form"
import { Logo } from '../Components'
import { Link } from 'react-router-dom'
import { ArrowLeft, Github, EyeOff, Eye } from 'lucide-react'


const Login = () => {

    const [ispassVisible, setIspassVisible] = useState(false)

    const togglePasswordView = () => {
        setIspassVisible(!ispassVisible)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section className='p-10 w-full min-h-screen bg-[#000000] flex md:flex-row flex-col gap-18'>

            <div className='p-8 md:h-[90vh] h-96 md:w-5/12 bg-[url(./assets/signupbg.png)] relative shadow-2xl shadow-indigo-700/40 bg-size-[700px_700px] rounded-xl flex flex-col items-center justify-center '>
                <Link to={'/'}><button className='py-2 px-4 bg-black flex absolute left-0 -top-1 rounded-br-2xl'><span className='bg-neutral-900 py-1 px-1 cursor-pointer hover:scale-110 duration-300 rounded-full'><ArrowLeft color='white' size={'20px'} /></span></button></Link>
                <Logo />
                <h1 className='text-white text-3xl font-semibold text-center'>Build. Impress. Get Hired.</h1>
            </div>
            <div className='flex flex-col justify-center p-6 items-center w-full md:w-6/12 text-white rounded-3xl'>
                <div className='md:w-9/12 w-full flex flex-col justify-center items-center'>
                    <h2 className='text-2xl md:pb-2 p-0 text-center'>Login to your Account </h2>
                    <div className='md:mt-10 mt-5 flex gap-3'>
                        <button className='flex gap-2 items-center border py-1 text-shadow-2xs px-4 rounded-xl text-sm bg-black border-neutral-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg> Google</button>
                        <button className='flex gap-2 items-center border text-sm text-shadow-2xs py-1 px-4 rounded-xl bg-black border-neutral-500'>
                            <Github /> Github</button>
                    </div>

                    <div className="md:w-9/12 w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-10 flex-col flex gap-2.5 w-full'>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor="email">Email</label>
                                <input type="email" {...register('email')} placeholder='Enter your email' className='py-2 px-4 w-full bg-neutral-600/30 p-1 outline-none rounded-lg' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="password">Password</label>
                                <div className='flex bg-neutral-600/30 rounded-xl items-center px-2'>
                                    <input type={ispassVisible ? 'text' : 'password'} {...register('password')} placeholder='Enter your password' className='w-full px-2 py-2 outline-none rounded-lg' />
                                    {ispassVisible ? <EyeOff size={'20px'} onClick={togglePasswordView} /> : <Eye size={'20px'} onClick={togglePasswordView} />}
                                </div>
                                <p className='text-neutral-500 mt-0.5 text-sm text-shadow-2xs'>Must be atleast 8 characters</p>
                            </div>
                            <input type="submit" value={`Log In`} className='w-full hover:cursor-pointer bg-white text-black my-4 rounded-xl py-2 px-4' />
                        </form>
                        <p className='text-center'>Already have an account? <button className='font-semibold'><Link to={'/signup'}>SignUp</Link></button></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login