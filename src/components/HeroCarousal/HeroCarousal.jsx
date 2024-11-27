import React, { useState, useEffect } from 'react';
import HeroSlider from "react-slick";
// componenets
import { NextArrow, PrevArrow } from './Arrows';
//axios
import axios from "axios";



const HeroCarousal = () => {

  const [images, setimages] = useState([]);
  useEffect(() => {
    // async call
    const reqNowPlaying = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setimages(getImages.data.results)
    }
    reqNowPlaying();
  }, []);

  const settingsLg = {
    arrows:true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }



  const settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };



  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3 ">
              <img
                src={`https://image.tmdb.org/t/p/w500/${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/w500/${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

    </>
  );
}

export default HeroCarousal;
