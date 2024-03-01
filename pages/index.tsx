import React from 'react'
import Navbar from '@/components/Navbar'
import Homepage from '@/components/Homepage'
import Features from '@/components/Features'
import AboutUs from '@/components/AboutUs'

const index = () => {
  return (
    <div className="overflow-x-hidden">
      <div>

        {/* <MobileNav nav={nav} closeNav={closeNav} /> */}

        <Navbar />

        <Homepage />

        <div className='relative z-[30]'>

          <Features />
          <AboutUs/>
          {/* <Footer />  */}
        </div>

      </div>
    </div>
  )
}

export default index