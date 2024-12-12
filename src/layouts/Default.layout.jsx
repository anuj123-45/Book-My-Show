import React from "react";
import Navbar from "../components/Navbar/navbar";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal";
import Footer from "../components/Footer/Footer";



const DefaultLayout=(props)=>{

return(

    <>
    <div>
       <Navbar/>
       <HeroCarousal/>
        {props.children}
        <Footer/>
      
    </div>
    </>
)

}


export default DefaultLayout;