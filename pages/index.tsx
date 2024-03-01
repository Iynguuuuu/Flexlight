import Navbar from '@/components/Navbar'
import Homepage from '@/components/Homepage'
import Features from '@/components/Features'
import AboutUs from '@/components/AboutUs'
import React, { useState } from 'react'
import MobileNavBar from '@/components/MobileNavbar'
import Footer from '@/components/Footer'



const Index = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>

        <MobileNavBar nav={nav} closeNav={closeNav} />

        <Navbar openNav={openNav} />

        <Homepage />

        <div className='relative z-[30]'>

          <Features />
          <AboutUs/>
          <Footer /> 
        </div>

      </div>
    </div>
  )
}

export default Index