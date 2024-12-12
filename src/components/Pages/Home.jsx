import React, { useState, useEffect } from 'react'
import EntertainmentCardSlider from '../Entertainment/EntertainmentCard'
import PosterSlider from '../PosterSlider/PosterSlider'
import axios from 'axios'
const Home = () => {

    const [popular, setpopular] = useState([]);
    const [toprated, settoprated] = useState([]);
    const [upcoming, setupcoming] = useState([]);

    useEffect(() => {
        const reqPopularMovies = async () => {
            const getMovies = await axios.get("/movie/popular")
            setpopular(getMovies.data.results)
        }
        reqPopularMovies();
    }, []);


    useEffect(() => {
        const reqTopRatedrMovies = async () => {
            const getMovies = await axios.get("/movie/top_rated")
            settoprated(getMovies.data.results)
        }
        reqTopRatedrMovies();
    }, []);

    useEffect(() => {
        const reqUpcomingMovies = async () => {
            const getMovies = await axios.get("/movie/upcoming")
            setupcoming(getMovies.data.results)
        }
        reqUpcomingMovies();
    }, []);

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
                    <PosterSlider images={popular} title='Premiers' subtitle='Brand new Releases every Friday' isDark />

                </div>

            </div>

            <div className="container mx-auto px-4 my-10">
                <PosterSlider images={toprated} title='Your Music Studio' isDark={false} />
            </div>

            <div className="container mx-auto px-4 my-10">
                <PosterSlider images={upcoming} title='Outdoor Events' isDark={false} />
            </div>
        </>
    )
}

export default Home
