import { LuPlugZap } from "react-icons/lu";
import React from 'react';

const Navbar = () => {
    return (
        <div className="w-[100%] opacity-60 mt-[2vh] items-center mx-auto fixed z-[10000] rounded-3xl  h-[10vh]  
        bg-gradient-to-r from-indigo-900 to-black shadow-md">
            <div className='flex items-center justify-between w-[90%] mx-auto h-[100%]'>
                <h1 className='flex-[0.7]  text-indigo-300 text-[60px] font-bold'>
                    < LuPlugZap />
                </h1>
                <div className='nav-link'>HOME</div>
                <div className='nav-link'>FEATURES</div>
                <div className='nav-link'>ABOUT US</div>
                <div className='nav-link'>CONTACT</div>

            </div>
        </div>
    )
}

export default Navbar
