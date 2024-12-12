import React from 'react';
import Poster from '../Poster/Poster';
import Slider from 'react-slick';
import settings from '../../config/PosterCarousel.config';

const PosterSlider = (props) => {  
  const sliderConfig=props.config ? props.config : settings;
  return (
    <>
      <div className="flex flex-col items-start pl-3">
                <h3 className={`text-xl font-bold ${props.isDark ? 'text-white':'text-gray-800'}`}>{props.title}</h3>
                <p className={`text-sm font-bold ${props.isDark ? 'text-white':'text-gray-800'}`}>{props.subtitle}</p>
            </div>
       
        
         <Slider {...sliderConfig}>
                {props.images.map((image, index) => (
                    <Poster key={index} {...image} isDark={props.isDark} />
                ))}
            </Slider>
         
    
    
    </>
  )
}

export default PosterSlider
