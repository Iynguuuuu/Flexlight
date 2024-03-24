import React from 'react'
import ReactPlayer from 'react-player'

const DVideo = () => {
    return (
        <section id="video">
            <div className='relative pt-[56.25%] h-[100vh]'>
                <ReactPlayer url='https://www.youtube.com/watch?v=vFkxssfo_kw&ab_channel=Iyng._.uuuuuu'
                    className='absolute inset-y-0'
                    width="100%"
                    height="100%"
                />
            </div>
        </section>

    )
}

export default DVideo
