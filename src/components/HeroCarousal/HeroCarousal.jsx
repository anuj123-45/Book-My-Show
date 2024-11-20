import React from 'react';
import HeroSlider from "react-slick";
// componenets
import { NextArrow, PrevArrow } from './Arrows';



const HeroCarousal = () => {

  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }



  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };

  const images = [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3"
  ];


  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3 ">
              <img
                src={image}
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
                src={image}
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
