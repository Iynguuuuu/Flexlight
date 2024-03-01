import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNavBar = ({ nav, closeNav }: Props) => {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

    return (

        <div className={`fixed ${navAnimation} bg-[#090f18] transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] opacity-80`}>
            <div className='w-[45vh] mr-[18vh] h-[100vh] flex flex-col items-center justify-center'>
            <a href="#Home"><div className='nav-link-mobile'>HOME</div></a>
                <a href="#Feature"><div className='nav-link-mobile'>FEATURES</div></a>
                <a href="#Funtion"><div className='nav-link-mobile'>FUNCTION</div></a>
                <a href="#AboutUs"><div className='nav-link-mobile'>ABOUT US</div></a>
                <a href="#Contact"><div className='nav-link-mobile'>CONTACT</div></a>
            </div>
            <div
                onClick={closeNav}
                className='absolute z-[100000000] cursor-pointer top-[1rem] right-[1rem] w-[3rem] h-[3rem] font-semibold text-yellow-400'>
                <XMarkIcon />
            </div>
        </div>

    )
}

export default MobileNavBar
