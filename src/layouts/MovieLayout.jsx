import React  from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar";
import { useParams} from "react-router-dom";
import { useContext ,useEffect} from "react";
import { MovieContext } from "../Context/MovieContext";
import axios from "axios";

const MovieLayout =(props) => {

  const { id } = useParams(); 
  const {setMovie } = useContext(MovieContext);

  useEffect(() => {
    const reqMovie = async () => {
      const getMovie = await axios.get(`/movie/${id}`)
      setMovie(getMovie.data)
    }
    reqMovie();    
  }, [id]);

  return (
    <>
      <div>
        <MovieNavbar />
        {props.children}
      </div>

    </>
  )
}
export default MovieLayout
