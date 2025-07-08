import React, { useState, useEffect } from 'react'
import image from '../assets/Shoes2.jpg'
import Button from './Button';

const Productadd = ({ animationtype, headertext, color, insidetext, bgimage }) => {
    const [islarge, setislarge] = useState(false);
    const [textcolor, settextcolor] = useState("black");
    useEffect(() => {
        let interval
        if (animationtype === "usestate") {
            interval = setInterval(() => {
                setislarge(prev => !prev);
                settextcolor(prev => prev === "black" ? "red" : "black");
            }, 1000);
        }
        else {
            settextcolor("black");
        }
        return () => {
            clearInterval(interval);
        }
    }, [animationtype])
    function getanimationtype() {
        switch (animationtype) {
            case "bounce":
                return "animate-bounce";
                break;
            case "usestate":
                return `transition transform duration-200 ${islarge ? 'scale-110' : 'scale-100'}`
            default:
                return ""
                break;
        }
    }
    function getTextColorClass() {
        const currentColor = color || textcolor;
        switch (currentColor) {
            case "red":
                return "text-red-600";
            case "blue":
                return "text-blue-600";
            case "green":
                return "text-green-600";
            case "yellow":
                return "text-yellow-600";
            case "purple":
                return "text-purple-600";
            case "black":
                return "text-black";
            case "white":
                return "text-white";
            default:
                return "text-red-600";
        }
    }
    return (
        <>
            {/* <div className='flex h-[700px] w-full justify-center'>
                <div className="flex h-[450px] w-[90%] bg-gray-700 bg-no-repeat bg-cover items-center p-6 rounded-3xl"> */}

            <div
                className="w-[30%] h-[300px] bg-cover bg-no-repeat flex flex-col justify-center p-8 rounded-3xl gap-4 hover:bg-gradient-to-br hover:from-green-300 hover:to-green-600 text-amber-50 transition-all duration-300 important animate overflow-clip"
                style={{ backgroundImage: `url(${bgimage})` }}
            >
                <h1 className={`text-3xl font-bold mb-4 ${getTextColorClass()} ${getanimationtype()}`}>
                    {headertext}
                </h1>
                <p className="text-base text-white font-bold leading-relaxed text-justify ">
                    {insidetext}
                </p>
                <div className="mt-6 self-center">
                    <Button text="Buy Now &#8594;" bgcolor={"bg-green-900"} />
                </div>
            </div>

            {/* </div>
            </div> */}
        </>
    );
};

export default Productadd