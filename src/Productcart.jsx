import React from 'react'
import Button from './Components/Button'
const Productcart = () => {
    return (
        <div className="bg-white  rounded-xl shadow-lg w-[25%] h-150 hover:shadow-xl transition-shadow duration-300 overflow-hidden ">
            {/* Image Section */}
            <figure className="relative overflow-hidden h-[60%]">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Product"
                    className="w-full h-[100%] object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    -25%
                </div> */}
            </figure>

            {/* Content Section */}
            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 p-1">
                    Product Title
                </h2>

                <p className="text-gray-600 text-2xl mb-3 p-1">
                    Product description goes here. This is a sample description for the product.
                </p>

                {/* Price Section */}
                <div className="flex items-center gap-2 p-2">
                    <span className="text-2xl text-black font-bold ">
                        $39.99
                    </span>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                    {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105">
                        Buy Now
                    </button> */}
                    <Button />
                </div>
            </div>
        </div >
    )
}

export default Productcart