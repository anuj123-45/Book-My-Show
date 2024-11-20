import React from "react";
import Navbar from "../components/Navbar/navbar";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal";



const DefaultLayout=(props)=>{

return(

    <>
    <div>
       <Navbar/>
       <HeroCarousal/>
        {props.children}
      
    </div>
    </>
)

}


export default DefaultLayout;