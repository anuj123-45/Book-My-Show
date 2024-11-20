import React from 'react'
import MovieInfo from './MovieInfo'

const MovieHero = () => {
    return (
        <>

            <div >
                {/* Mobile */}
                <div className=' relative md:hidden w-full' style={{ height: "calc(180vw)" }}>
                <div className='absolute bottom-2 z-20 left-8'>
                       <MovieInfo/>
                    </div>
                    <div className='w-full h-56 bg-opacity-50 absolute bottom-0 bg-black z-10'/>
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/joker-folie-a-deux-preview-et00418060-1730375247.jpg" alt="" className='w-full h-full' />
                </div>

                {/* Tablets */}
                <div className=' relative hidden md:block w-full lg:hidden' style={{ height: "calc(180vw)" }}>
                <div className='absolute bottom-4 z-20'>
                       <MovieInfo/>
                    </div>
                  <div className='w-full h-56 bg-opacity-50 absolute bottom-0 bg-black z-10'/>
                  <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/joker-folie-a-deux-preview-et00418060-1730375247.jpg" alt="" className='w-full h-full' />
                  </div>
               
                {/* LargeScreen */}
                <div className='relative hidden w-full lg:block' style={{ height: "30rem" }}>
                <div className='absolute h-full z-10 w-full '  style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}/>
             
          <div className='absolute z-30 left-20 top-32 flex items-center gap-7'>
          <div className='w-60 h-80 '>
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/girl-you-know-it-s-true-et00413593-1730125934.jpg" alt="poster" className='w-full h-full rounded-lg' />
                </div>
                <div>
                    <MovieInfo/>
                </div>
          </div>
         
          
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/joker-folie-a-deux-preview-et00418060-1730375247.jpg" alt="" className='w-full h-full' />
              
                </div>
            </div>

        </>
    )
}

export default MovieHero
