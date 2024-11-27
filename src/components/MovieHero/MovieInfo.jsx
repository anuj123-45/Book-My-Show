import React , {useContext,useState} from 'react'
import { MovieContext } from '../../Context/MovieContext'
import Payment from '../PaymentModal/Payment'


const MovieInfo = () => {
  const {movie}=useContext(MovieContext)

  const [isOpen, setIsOpen] = useState(false);
  const [price, setprice] = useState(0);

  const rentMovies=()=>{
    setIsOpen(true)
    setprice(149)
  }

  const buyMovies=()=>{
    setIsOpen(true)
    setprice(599)
  }


  // optional chaining
  const genres=movie.genres && movie.genres.map(({name})=>name).join(", ")
  return (
    <>
    <Payment isOpen={isOpen} setIsOpen={setIsOpen} price={price}/>
    <div>
       <div className='flex items-center gap-3'>
       <div className='w-40 h-7 '>
         <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className='w-full h-full' />
        </div>
        <span className='text-white bg-anuj-800 rounded-md p-1 text-xs'> Streaming now</span>
       </div>
        <h1 className=' text-white lg:text-5xl py-5 hidden lg:block'>{movie.title}</h1>
        <div className='text-white flex flex-col gap-3'>
            <h4>4k &bull; {movie.original_language}</h4>
            <h4>{(movie.runtime/60).toFixed(2)} h &bull; {genres} &bull; 13+ &bull;</h4>
        </div>
        <div className="text-white mt-3 flex gap-5 md:w-screen lg:w-full">
  <button onClick={rentMovies} className="bg-anuj-1000 w-full cursor-pointer px-5 py-2 rounded-md">
    Rent ₹149
  </button>
  <button onClick={buyMovies} className="bg-anuj-1000 w-full cursor-pointer px-5 py-2 rounded-md">
    Buy ₹599
  </button>
</div>


    </div>
    </>
  )
}

export default MovieInfo
