import React from 'react';
import nikeImage from '../assets/Best-Nike-Commercial.jpg';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex justify-center items-center gap-5'>
                <div className="nav w-[80vw] h-20 flex justify-between mx-auto items-center ">
                    <img src={nikeImage} alt="logo" className='h-11 w-22 rounded' />
                    <ul className='flex gap-7 font-[500]'>
                        <li >Home</li>
                        <li>About</li>
                        <li>Location</li>
                        <li>Contact</li>
                    </ul>
                    {/* <button className='h-11 w-17 bg-green-900 rounded font-bold text-green-50'> Log in</button> */}
                    <Button text='Log in' />
                </div >
                <Button text='Sign up' onClick={() => navigate('/signin')} />
            </div>
        </>
    );
};

export default Navigation;
