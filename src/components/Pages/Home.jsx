import React from 'react'
import EntertainmentCardSlider from '../Entertainment/EntertainmentCard'
import premieres from '../../config/Images.config'
import PosterSlider from '../PosterSlider/PosterSlider'
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
                     <PosterSlider images={premieres} title='Premiers' subtitle='Brand new Releases every Friday' isDark/>
                    
                    </div>

                </div>

                <div className="container mx-auto px-4 my-10">
                <PosterSlider images={premieres} title='Your Music Studio' isDark={false}/>
                </div>

                <div className="container mx-auto px-4 my-10">
                <PosterSlider images={premieres} title='Outdoor Events' isDark={false}/>
                </div>
        </>
    )
}

export default Home
