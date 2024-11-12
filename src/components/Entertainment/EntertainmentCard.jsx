import React from 'react'
import HeroSlider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <div className='w-full h-full p-4'>
      <img src={props.src} alt="image" className='w-full h-full rounded-xl cursor-pointer'/>
    </div>
  )
}

const EntertainmentCardSlider=()=>{
    const EntertainmentImage = [
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NiBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
    ];

      const settings={
        infinity:false,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:4,
        InitialSlide:0,
        responsive:[{
            breakpoints:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:2,
                infinite:true
            },

            breakpoints:600,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                InitialSlide:1,
              
            },
            breakpoints:480,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                InitialSlide:1,
              
            }
        }]
      }
    return <>
     <HeroSlider {...settings}>

     {
        EntertainmentImage.map((image,index)=>{
           return <EntertainmentCard key={index} src={image}/>
        })
     }
     </HeroSlider>
    </>
}


export default EntertainmentCardSlider