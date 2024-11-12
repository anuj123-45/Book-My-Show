import React from 'react'
import EntertainmentCardSlider from '../Entertainment/EntertainmentCard'

const Home = () => {
    return (
        <>
            <div className="conatiner p-8 ">
                <h1 className="text-2xl font-bold text-gray-800 my-5">
                    The best of Live Events
                </h1>
                <EntertainmentCardSlider />
            </div>

        </>
    )
}

export default Home
