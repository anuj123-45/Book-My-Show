import React from 'react'
import HeroSlider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <div className='w-full h-30 p-4'>
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
   "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MSBFdmVudA%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/holi-parties-web-collection-202402261056.png",
   "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/interactive-games-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png",




    ];

    const settings = {
      infinity: true, 
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0, // Fix capitalization
      responsive: [
          {
              breakpoint: 1024, // For medium screens
              settings: {
                  slidesToShow: 3, // Show 3 cards
                  slidesToScroll: 2,
                  infinite: true,
              },
          },
          {
              breakpoint: 600, // For small-medium screens
              settings: {
                  slidesToShow: 2, // Show 2 cards
                  slidesToScroll: 1,
                  initialSlide: 0, // Adjust based on your requirement
              },
          },
          {
              breakpoint: 480, // For extra small screens
              settings: {
                  slidesToShow: 2, // Show 2 cards
                  slidesToScroll: 1,
                  initialSlide: 0, // Adjust based on your requirement
              },
          },
      ],
  };
  
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