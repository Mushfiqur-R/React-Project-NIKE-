
import React from 'react';

const Button = ({ text = "", bgcolor, onClick }) => {
    return (
        <button
            className={`${bgcolor} h-11 w-35 px-6 rounded font-bold text-green-50 mt-8 hover:bg-green-800 transition`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
