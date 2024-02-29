import { FaWifi } from "react-icons/fa";
import { BsJoystick } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";
import React from 'react'

const Features = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-900 to-black pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>
                Our <span className='text-yellow-300'>Features</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] 
                            mx-auto items-center gap-[3rem] mt-4rem text-white pt-[3rem] '>
                <div data-aos="fade-right">
                    <div className='bg-blue-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                        <FaWifi className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                            Wireless
                        </h1>
                        {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="300">
                    <div className='bg-red-800 hover:scale-110 transform transition-all duration-300 
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                        <BsJoystick className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                            Automation
                        </h1>
                        {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="500">
                    <div className='bg-green-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                        <FaHandHoldingDollar className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                            Affordable
                        </h1>
                        {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                    </div>
                </div>

                <div data-aos="fade-right" data-aos-delay="700">
                    <div className='bg-orange-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                        <BsFillBuildingsFill className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                            Scalability
                        </h1>
                        {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="900">
                    <div className='bg-indigo-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                        <FaRegClock className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                            Timed Based Power Control

                        </h1>
                        {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="1100">
                    <div className='bg-yellow-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                        <TiSpanner className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                            Maintenance
                        </h1>
                        {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Features