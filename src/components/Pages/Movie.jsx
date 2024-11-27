import React, { useContext, useState, useEffect } from 'react'
import MovieHero from '../MovieHero/MovieHero'
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Cast from '../Cast/Cast';
import PosterSlider from '../PosterSlider/PosterSlider';
import { MovieContext } from '../../Context/MovieContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';


const Movie = () => {
  const { id } = useParams(); 
  const { movie } = useContext(MovieContext);
  const [castdetails, setcast] = useState([]);
  const [crewdetails, setcrew] = useState([]);
  const [similarmovies, setsimilarmovies] = useState([]);
  const [recommended, setrecommended] = useState([]);
  useEffect(() => {
    const reqCastCrew = async () => {
      const getCastCrew = await axios.get(`movie/${id}/credits`)
      setcast(getCastCrew.data.cast);  
      setcrew(getCastCrew.data.crew);   
    }
    reqCastCrew();
  }, [id]);

  useEffect(() => {
    const reqSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`movie/${id}/similar`)
      setsimilarmovies(getSimilarMovies.data.results)
    }
    reqSimilarMovies();
  }, [id]);

  useEffect(() => {
    const reqRecommendedMovies = async () => {
      const getRecommendedmovies = await axios.get(`movie/${id}/recommendations`)
      setrecommended(getRecommendedmovies.data.results)
    }
    reqRecommendedMovies();
  }, [id]);



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 1024, // Medium screens (tablets, small laptops)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Smaller tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const settingsCast = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 1024, // Medium screens (tablets, small laptops)
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true
        },
      },
      {
        breakpoint: 768, // Smaller tablets
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <>
      <MovieHero />
      <div className=' my-10 container lg:ml-16 lg:w-2/3 px-4'>
        <div className='flex flex-col items-start'>
          <h2 className='text-gray-800 font-bold text-2xl'>About the movie</h2>
          <p>{movie.overview}</p>
        </div>
        <div className='my-8'>
          <hr />
        </div>


        <div className='flex gap-3'>
          <div className='my-8'>
            <h2 className='font-bold text-gray-800 text-2xl mb-5'>Available offers</h2>

            <div className='flex flex-col gap-3 lg:flex-row'>
              <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md cursor-pointer">
                <div className="w-8 h-8">
                  <FaCcVisa className="w-full h-full" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-bold">
                    Visa Stream Offer
                  </h3>
                  <p className="text-gray-600">
                    Get 50% off up to INR 150 on all Visa cards* on BookMyShow
                    Stream.
                  </p>
                </div>
              </div>

              <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md cursor-pointer">
                <div className="w-8 h-8">
                  <FaCcApplePay className="w-full h-full" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-bold">
                    Filmy Pass
                  </h3>
                  <p className="text-gray-600">
                    Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                    Pass @Rs.99
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-8'>
          <hr />
        </div>


        <div className='my-8'>
          <h2 className='font-bold text-gray-800 text-2xl mb-5'>Cast</h2>

          <Slider {...settingsCast}>
            {
              castdetails.map((castdata) => {
                return <Cast key={castdata.id} src={`https://image.tmdb.org/t/p/original${castdata.profile_path}`} name={castdata.name} role={castdata.character} />
              })
            }
          </Slider>

        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
          <h2 className='font-bold text-gray-800 text-2xl mb-5'>Crew</h2>
          <Slider {...settingsCast}>
            {
              crewdetails.map((crewdata) => {
                return <Cast key={crewdata.id} src={`https://image.tmdb.org/t/p/original${crewdata.profile_path}`} name={crewdata.name} role={crewdata.job}/>
              })
            }
          </Slider>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
          <PosterSlider images={similarmovies} title='You might also like' isDark={false} config={settings} />
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
          <PosterSlider images={recommended} title='Recommended' isDark={false} config={settings} />
        </div>











      </div>

    </>
  )
}

export default Movie
