
import React from 'react';

const Button = ({ text = "Click Me", onClick }) => {
    return (
        <button
            className="h-11 w-35 px-6 bg-green-900 rounded font-bold text-green-50 mt-8 hover:bg-green-800 transition "
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
