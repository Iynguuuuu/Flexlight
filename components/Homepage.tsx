import React, { useEffect } from 'react';
// import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { FaPlayCircle } from "react-icons/fa";
import { LuPlugZap } from 'react-icons/lu';
import TextAnimation from './TextAnimation';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Homepage = () => {

    // Animation AOS setup
    useEffect(() => {

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });

    }, [])

    return (

        <section id='Home'>

            <div className=' h-[100vh]  bg-[url(/images/bg1.jpg)]  bg-cover bg-center'>
                {/* */}
                <div className='w-[90%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                    <div>
                        <h1 className='text-[35px] md:text-[50px] mt-[14vh] text-white font-bold'>
                            Welcome to <span className='text-yellow-300 text-[65px] '>FlexLight</span>
                        </h1>
                        <TextAnimation />
                        <p className='mt-[1.5rem] text-[18px] text-white opacity-70'>
                            We focuses on centralising the control of the power supply
                            through software to automate and control the energy supply from homes to large residential or
                            commercial buildings efficiently to reduce energy waste and reduce the consequences that the
                            world faces due to the inefficient use of electricity.
                        </p>
                        <div className='mt-[2rem] ml-[0vh] flex-col space-y-6 sm:space-y-0  sm:flex sm:flex-row items-center sm:space-x-10'>
                            {/* <a href="" download="APk File" target="_blank" rel="noopener noreferrer">  </a> */}

                            <button className='flex  items-center  space-x-2 px-[2rem] hover:bg-yellow-300 transition-all duration-200 py-[1rem] 
                                            text-[18px] font-bold bg-violet-400 rounded-3xl shadow-2xl shadow-cyan-500 h-[3rem] text-black'>

                                <p>Download APK</p>
                                <ArrowDownTrayIcon className=' w-[1.7rem] h-[1.7rem] text-black' />

                            </button>

                            <a href="#video"> 
                            <button className='flex items-center space-x-2 '>

                                <FaPlayCircle className='w-[3rem] h-[3rem] mt-[3vh]  hover:text-yellow-300 transition-all duration-200 rounded-full shadow-2xl
                                    shadow-cyan-200 text-blue-500' />
                                <p className='text-[20px] font-semibold text-white'>Watch Video</p>

                            </button>
                            </a>



                        </div>

                    </div>

                    <div data-aos="fade-up" data-aos-delay="100" className='ml-[12vh] mt-[9vh] '>
                        <LuPlugZap className="text-cyan-300 w-[350px] h-[350px]   hidden relative lg:flex items-center rounded-full 
                     shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" />  {/*shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]*/}
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Homepage;
