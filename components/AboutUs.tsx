import React from 'react'
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-900 to-black pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>
                ABOUT<span className='text-yellow-400'> US</span>
            </p>
            <p className='text-center mt-[1vh] text-white text-[20px] opacity-60'>
                We are Software Engineering Undergraduates of Infomatics Institute of Technology (IIT). <br />
                Flex Light is our university Software Development Group Project.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] 
                            mx-auto items-center gap-[3rem] mt-4rem text-white pt-[3rem] '>


                <div className='text-center p-[1rem]'>

                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                        <Image src="/images/us.jpg" alt="AboutUs" layout='fill' className='object-contain fixed rounded-full' />
                    </div>
                    <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px] font-semibold'>
                        Chanuth Kausilu Suraweeraarachchi <br />
                        <span className='text-18 font-normal'>Founder</span>
                    </h1>
                </div>



                <div className='text-center p-[1rem]'>
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                        <Image src="/images/us.jpg" alt="AboutUs" layout='fill' className='object-contain fixed rounded-full' />
                    </div>
                    <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px] font-semibold'>
                        Akila Jayawardana  <br />
                        <span className='text-18 font-normal'>Member</span>
                    </h1>
                </div>



                <div className='text-center p-[1rem]'>

                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                        <Image src="/images/us.jpg" alt="AboutUs" layout='fill' className='object-contain fixed rounded-full' />
                    </div>
                    <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px] font-semibold'>
                        Iynkaran Pavanantham  <br />
                        <span className='text-18 font-normal'>Member</span>
                    </h1>
                </div>




                <div className='text-center p-[1rem]'>
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                        <Image src="/images/us.jpg" alt="AboutUs" layout='fill' className='object-contain fixed rounded-full' />
                    </div>
                    <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px] font-semibold'>
                        Abdul Adeel <br />
                        <span className='text-18 font-normal'>Member</span>
                    </h1>
                </div>




                <div className='text-center p-[1rem]'>
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                        <Image src="/images/us.jpg" alt="AboutUs" layout='fill' className='object-contain fixed rounded-full' />
                    </div>
                    <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px] font-semibold'>
                        Atheeshwaran Rajaratnam  <br />
                        <span className='text-18 font-normal'>Member</span>
                    </h1>
                </div>
            </div>


        </div>

    )
}

export default AboutUs