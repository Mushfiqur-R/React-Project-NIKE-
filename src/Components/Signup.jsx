import React from 'react'
import Button from './Button'
const Signup = () => {
    return (
        <>
            <div className="flex min-h-screen justify-center items-center">
                <div className="flex flex-col h-auto w-full max-w-md bg-amber-400 sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] border-2  p-8 rounded-xl shadow-lg gap-3 shadow">
                    <h2 className="font-bold text-3xl text-center mb-6">Sign In</h2>

                    {/* Input Field */}
                    <div className="relative w-full h-[60px] mb-4">
                        <input
                            type="text"
                            id="email"
                            required
                            className="peer w-full rounded-2xl  h-full px-3 pt-6 pb-1 border-2 border-black bg-transparent text-black placeholder-transparent focus:outline-none focus:border-black"
                            placeholder="Email"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-base transition-all duration-300
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                        peer-focus:top-1 peer-focus:text-sm peer-focus:bg-black peer-focus:text-white peer-focus:px-1 peer-focus:rounded
                        peer-hover:top-1 peer-hover:text-sm peer-hover:text-white peer-hover:bg-black peer-hover:px-1 peer-hover:rounded
                        peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-base peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:rounded peer-not-placeholder-shown:text-white"

                        >
                            Email
                        </label>
                    </div>

                    {/* password Field */}
                    <div className="relative w-full h-[60px] mb-4">
                        <input
                            type="password"
                            id="password"
                            required
                            className="peer w-full rounded-2xl  h-full px-3 pt-6 pb-1 border-2 border-black bg-transparent text-black placeholder-transparent focus:outline-none focus:border-black"
                            placeholder="Password"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-base transition-all duration-300
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                        peer-focus:top-1 peer-focus:text-sm peer-focus:bg-black peer-focus:text-white peer-focus:px-1 peer-focus:rounded
                        peer-hover:top-1 peer-hover:text-sm peer-hover:text-white peer-hover:bg-black peer-hover:px-1 peer-hover:rounded
                        peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-base peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:rounded peer-not-placeholder-shown:text-white"

                        >
                            Password
                        </label>
                    </div>

                    {/* Remember Me + Forgot Password (same line) */}
                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-black accent-black" />
                            <span>Remember Me</span>
                        </label>
                        <a href="#" className="text-black hover:font-bold underline text-sm ">
                            Forgot Password?
                        </a>
                    </div>
                    <div className='flex justify-center '>
                        <Button text='signup' bgcolor={"bg-black"} />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Signup