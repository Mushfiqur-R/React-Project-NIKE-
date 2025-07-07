import React, { useState } from 'react';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { username, password });
    };

    return (
        <div className="m-0 p-0 font-sans box-border flex justify-center items-center min-h-screen text-white bg-[#081b29]">
            <div className="relative h-[450px] w-[750px] border-2 border-blue-400 bg-transparent shadow-[0_0_15px_skyblue] overflow-hidden">
                {/* Background Design */}
                <span className="absolute top-0 right-0 h-[600px] w-[850px] border-2 border-blue-400 bg-gradient-to-br from-black to-blue-400 transform rotate-[10deg] skew-y-[40deg] origin-bottom-right"></span>

                {/* Login Form */}
                <div className="absolute top-0 left-0 h-full w-1/2 flex flex-col justify-center pl-10 pr-15">
                    <h2 className="text-center text-white  text-4xl  mb-6">Login</h2>
                    <div onSubmit={handleSubmit}>
                        <div className="relative h-[50px] w-full my-6 gap-5">
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="h-full w-full border-none outline-none pr-6 bg-transparent text-white border-b-2 border-white text-base transition-all duration-300 ease-in-out hover:border-b-[#00bfff] hover:shadow-[0_5px_5px_-2px_#00bfff] focus:border-b-[#00bfff] focus:shadow-[0_5px_5px_-2px_#00bfff] valid:border-b-[#00bfff] valid:shadow-[0_5px_5px_-2px_#00bfff] peer"
                            />
                            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 pointer-events-none peer-hover:top-[-5px] peer-hover:text-blue-400 peer-focus:top-[-5px] peer-focus:text-blue-400 peer-valid:top-[-5px] peer-valid:text-blue-400">
                                Username
                            </label>
                            <i className="bx bx-user absolute right-0 top-1/2 transform -translate-y-1/2 text-xl transition-colors duration-300"></i>
                        </div>

                        <div className="relative h-[50px] w-full my-6">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="h-full w-full border-none outline-none pr-6 bg-transparent text-white border-b-2 border-white text-base transition-all duration-300 ease-in-out hover:border-b-[#00bfff] hover:shadow-[0_5px_5px_-2px_#00bfff] focus:border-b-[#00bfff] focus:shadow-[0_5px_5px_-2px_#00bfff] valid:border-b-[#00bfff] valid:shadow-[0_5px_5px_-2px_#00bfff] peer"
                            />
                            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 pointer-events-none peer-hover:top-[-5px] peer-hover:text-blue-400 peer-focus:top-[-5px] peer-focus:text-blue-400 peer-valid:top-[-5px] peer-valid:text-blue-400">
                                Password
                            </label>
                            <i className="bx bx-lock-alt absolute right-0 top-1/2 transform -translate-y-1/2 text-xl transition-colors duration-300"></i>
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="relative h-[50px] w-full bg-transparent border-2 border-blue-400 rounded-[30px] cursor-pointer text-base font-semibold text-white overflow-hidden hover:bg-gradient-to-br hover:from-black hover:to-blue-400 transition-all duration-300 mt-4"
                        >
                            Log in
                        </button>

                        <div className="text-base text-center mt-6 mb-2">
                            <p>
                                Don't have an account yet??{' '}
                                <a href="#" className="font-semibold underline text-blue-400 hover:text-blue-300">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Info Text */}
                <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center pl-[150px] pr-10 pb-15">
                    <h2 className="text-4xl leading-relaxed">Welcome</h2>
                    <p>Welcome to ACU-Weather</p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;