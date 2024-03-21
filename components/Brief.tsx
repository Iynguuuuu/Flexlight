import React from 'react'

const Brief = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-900 to-black pt-[4rem] md:pt-[8rem] pb-[5rem] h-[100%] items-center width-[90%] mx-auto '>
            <p className='heading'>
                Project <span className='text-yellow-400'>Brief</span>
            </p>

            <p className='mt-[1.5rem] ml-[4rem] mr-[4rem] text-[18px] text-white opacity-70'>
                A solution for energy wastage will be to remove human appliance interaction or more precisely
                remove the responsibility of humans to reduce energy wastage that occurs due to human
                practices. Taking into account the energy wastage that happens in homes and buildings
                where people spend most of their time, the solution will
                be to create a power management system that can automate the energy supply to appliances and
                reduce the unnecessary usage of energy.
                <br/><br />
                With the help of relays and controllers and wifi communication, ideally, an Arduino with an
                ESP8266 wifi module or a NodeMCU with an interactive smart app can control power. The
                system is modular and can be expanded easily to a high scale at a low cost. 
                The smart application is available as both a mobile and a web application making the system more accessible to users.
                Using this app, users will have the ability to control the power to each relay and even be able to
                monitor the electricity usage specified for each relay as well if a current sensor is installed.
                <br /><br />
                The final product that will be used commercially will consist of a motherboard with integrated
                IC and wifi to control the relay modules with attached Power measurement sensors to all relays
                by default, these will have both voltage and current sensors to measure current more accurately.
                The system will also consist of offline power control and motoring with backup relays and a
                bypass power delivery system to provide electricity to the users without having to physically
                remove the BMS system.
            </p>

        </div>
    )
}

export default Brief
