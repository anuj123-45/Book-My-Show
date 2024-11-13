import React from 'react'
import EntertainmentCardSlider from '../Entertainment/EntertainmentCard'
import Premier from '../Premier/Premier'

const Home = () => {
    return (
        <>
            <div className="conatiner p-8 ">
                <h1 className="text-2xl font-bold text-gray-500 my-5">
                    The best of Live Events
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className=' bg-anuj-800 py-16'>
                    <div className="container mx-auto px-4">
                    <div className='hidden md:flex' >
                <img src="https://tinyurl.com/57xkh22d" alt="premier-image" className='w-full h-full' />
                </div> 
                        <Premier />
                    </div>
                </div>

        </>
    )
}

export default Home
