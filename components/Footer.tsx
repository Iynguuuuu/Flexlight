import { FaLocationDot } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { FaPhone } from "react-icons/fa6";
import React from 'react'

const Footer = () => {
    return (

        <section className="bg-gradient-to-r from-[#19245f] to-black" id="Contact">

            <div>
                <div className="items-center ml-[4vh] w-[90%]">
                    <h1 className="text-[55px]  font-semibold text-white">Contact us for more.</h1>
                    <p className="text-[20px] w-[100%] text-white opacity-60">
                        We would be happy to further discuss about our product with you,
                        simply shoot us an Email or Contact via WhatsApp : )
                    </p>
                </div>
            </div>

            <div className='pt-[4rem] pb-[4rem]'>
                <div className='grid grid-cols-1 border-b-[1px] pb-[6rem] border-gray-400 
                        lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]  '>


                    <div>
                        <div className='flex items-center space-x-6'>
                            <FaPhone className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-green-600' />
                            <div>
                                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Phone Number</h1>
                                <p className="text-[17px] w-[100%] text-white opacity-60">+94 76 090 1661</p>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div className='flex items-center space-x-6'>

                            <EnvelopeIcon className='md:w-[5rem] md:h-[4rem] w-[4rem] h-[4rem] text-blue-600' />

                            <div>
                                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Email</h1>
                                <p className="text-[17px] w-[100%] text-white opacity-60">chanuthkausilu@gmail.com</p>
                            </div>
                        </div>

                    </div>


                    <div>
                        <div className='flex items-center space-x-6'>
                            <FaLocationDot className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-red-600' />
                            <div>
                                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Location</h1>
                                <p className="text-[17px] w-[100%] text-white opacity-60">Colombo, Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default Footer