import React from 'react'

const MovieInfo = () => {
  return (
    <>
    <div>
       <div className='flex items-center gap-3'>
       <div className='w-40 h-7 '>
         <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className='w-full h-full' />
        </div>
        <span className='text-white bg-anuj-800 rounded-md p-1 text-xs'> Streaming now</span>
       </div>
        <h1 className=' text-white lg:text-5xl py-5 hidden lg:block'>Girl u know its true</h1>
        <div className='text-white flex flex-col gap-3'>
            <h4>4k &bull; English &bull; Action &bull;</h4>
            <h4>1:53 &bull; Action, Sci-fi, Thriller &bull; 13+ &bull;</h4>
        </div>
        <div className="text-white mt-3 flex gap-5 md:w-screen lg:w-full md:px-3">
  <button className="bg-anuj-1000 w-full cursor-pointer px-5 py-2 rounded-md">
    Rent ₹149
  </button>
  <button className="bg-anuj-1000 w-full cursor-pointer px-5 py-2 rounded-md">
    Buy ₹49
  </button>
</div>


    </div>
    </>
  )
}

export default MovieInfo
