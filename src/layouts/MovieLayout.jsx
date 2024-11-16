import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar";

const MovieLayout = (props) => {
  return (
   <>
     <div>
       <MovieNavbar/>
        {props.children}
    </div>
   
   </>
  )
}

export default MovieLayout
