import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settings = {
        arrows:true,
        centerMode:true,
        dots: true,
        Infinity:true,
        centerPadding:"120px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="w-20 h-[300px]">
                        <img src={image} alt="carousel" className="w-full h-full object-cover" />
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default HeroCarousal;
