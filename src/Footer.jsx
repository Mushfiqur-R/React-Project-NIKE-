import React from 'react';

const Footer = () => {
    return (
        <div className="w-full h-auto mt-auto  ">
            <footer className="bg-gray-900 text-white py-12 px-6">
                {/* <div className="flex flex-col justify-item-centermax-w-7xl mx-auto "> */}
                <div className="flex flex-col md:flex-row justify-between gap-8 w-[90%] pl-50">
                    {/* Services Section */}
                    <nav className="flex flex-col space-y-3">
                        <h6 className="text-lg font-semibold text-gray-300 mb-4">Services</h6>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Branding
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Design
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Marketing
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Advertisement
                        </a>
                    </nav>

                    {/* Company Section */}
                    <nav className="flex flex-col space-y-3">
                        <h6 className="text-lg font-semibold text-gray-300 mb-4">Company</h6>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            About us
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Contact
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Jobs
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Press kit
                        </a>
                    </nav>

                    {/* Legal Section */}
                    <nav className="flex flex-col space-y-3">
                        <h6 className="text-lg font-semibold text-gray-300 mb-4">Legal</h6>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Terms of use
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Privacy policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            Cookie policy
                        </a>
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Your Company Name. All rights reserved.
                    </p>
                </div>
                {/* </div> */}
            </footer >
        </div >
    );
};

export default Footer;