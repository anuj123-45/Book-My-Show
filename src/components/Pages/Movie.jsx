import React from 'react'
import MovieHero from '../MovieHero/MovieHero'
import { FaCcVisa , FaCcApplePay } from "react-icons/fa";
import Cast from '../Cast/Cast';
import PosterSlider from '../PosterSlider/PosterSlider';
import premieres from '../../config/Images.config';

const Movie = () => {

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
                infinite:true
            },
        },
        {
            breakpoint: 768, // Smaller tablets
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide:2,
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

 

  return (
    <>
      <MovieHero />
      <div className=' my-10 container lg:ml-16 lg:w-2/3 px-4'>
        <div className='flex flex-col items-start'>
          <h2 className='text-gray-800 font-bold text-2xl'>About the movie</h2>
          <p>Dancers Pilatus and Morvan skyrocketed to fame in the late 80s with chart-topping hits and a Grammy win, captivating audiences without ever singing a word. However, when the truth behind their success was unveiled, it led to one of the biggest scandals in music history, shattering their careers and reputation</p>
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
     <div className='flex flex-wrap gap-3'>
     <Cast src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-1685968467.jpg' name='Kartik Aryan' role='Actor'/>
     <Cast src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-1685968467.jpg' name='Kartik Aryan' role='Actor'/>
     <Cast src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-1685968467.jpg' name='Kartik Aryan' role='Actor'/>
     </div>       
     </div>

     <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'> 
     <h2 className='font-bold text-gray-800 text-2xl mb-5'>Crew</h2>
     <div className='flex flex-wrap gap-3'>
     <Cast src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-1685968467.jpg' name='Kartik Aryan' role='Actor'/>
     <Cast src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-1685968467.jpg' name='Kartik Aryan' role='Actor'/>
     <Cast src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-1685968467.jpg' name='Kartik Aryan' role='Actor'/>
     </div>       
     </div>

     <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
         <PosterSlider images={premieres} title='You might also like' isDark={false} config={settings} />
        </div>
        
        <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
         <PosterSlider images={premieres} title='BMS XCLUSIV' isDark={false} config={settings} />
        </div>












      </div>

    </>
  )
}

export default Movie
