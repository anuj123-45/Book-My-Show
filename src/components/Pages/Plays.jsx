import React from 'react'
import Poster from '../Poster/Poster'
import FilterPlays from '../FilterPlays/FilterPlays'


const Plays = () => {
    return (
        <>
            <div className='container mx-auto px-4'>

                <div className='w-full lg:flex lg:flex-row-reverse my-8 gap-3'>

                    <div className='lg:w-3/4'>
                        <h2 className='text-2xl font-bold'>Plays in Bengaluru</h2>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2  md:w-1/3  lg:w-3/12'>
                                <Poster src='https://shorturl.at/Oq8W6' title='Anuj' subtitle='Telugu' />
                            </div>
                            <div className='w-1/2  md:w-1/3  lg:w-3/12'>
                                <Poster src='https://shorturl.at/Oq8W6' title='Anuj' subtitle='Telugu' />
                            </div>
                            <div className='w-1/2  md:w-1/3  lg:w-3/12'>
                                <Poster src='https://shorturl.at/Oq8W6' title='Anuj' subtitle='Telugu' />
                            </div>
                            <div className='w-1/2  md:w-1/3  lg:w-3/12'>
                                <Poster src='https://shorturl.at/Oq8W6' title='Anuj' subtitle='Telugu' />
                            </div>
                            <div className='w-1/2  md:w-1/3  lg:w-3/12'>
                                <Poster src='https://shorturl.at/Oq8W6' title='Anuj' subtitle='Telugu' />
                            </div>

                        </div>
                    </div>


                    <div className='lg:w-3/12'>
                    <h2 className='text-2xl font-bold'>Filters</h2>
                    <div className=''>
                 <FilterPlays title='Date' tags={["Today","Tomorrow","This Weekend"]}/>
                 <FilterPlays title='Language' tags={[ "Hindi","Bengali","Telugu","Tamil","Marathi","Gujarati","Kannada","Malayalam","Punjabi", "Odia"]}/>
                    </div>
                    </div>

                </div>




            </div>
        </>
    )
}

export default Plays;
