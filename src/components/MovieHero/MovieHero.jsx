import React from 'react'

const MovieHero = () => {
    return (
        <>

            <div >
                {/* Mobile */}
                <div className=' relative md:hidden w-full' style={{ height: "calc(180vw)" }}>
                    <div className='w-full h-56 bg-opacity-50 absolute bottom-0 bg-black z-10'/>
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/joker-folie-a-deux-preview-et00418060-1730375247.jpg" alt="" className='w-full h-full' />
                </div>

                {/* Tablets */}
                <div className='hidden md:block w-full lg:hidden' style={{ height: "calc(180vw)" }}>

                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/joker-folie-a-deux-preview-et00418060-1730375247.jpg" alt="" className='w-full h-full' />
                </div>
                {/* LargeScreen */}
                <div className='hidden w-full lg:block' style={{ height: "30rem" }}>
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/joker-folie-a-deux-preview-et00418060-1730375247.jpg" alt="" className='w-full h-full' />
                </div>
            </div>

        </>
    )
}

export default MovieHero
