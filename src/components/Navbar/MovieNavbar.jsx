import React, { useContext } from 'react'
import { CiShare2 } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MovieContext } from '../../Context/MovieContext';

const Navsm = () => {
    const {movie}=useContext(MovieContext);
    return <>
        <div className='text-white p-4 flex items-center justify-between'>
            <div>
                <h3 className='text-xl font-bold'>{movie.original_title}</h3>
              
            </div>
            <div className='w-8 h-8'>
                <CiShare2 className='w-full h-full' />
            </div>
        </div>
    </>
}

const Navlg = () => {
    return <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">

                <div className="w-20 h-10">
                    <img
                        src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>

                <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-md w-full">
                    <IoSearchOutline />
                    <input
                        className="w-full bg-transparent border-none focus:outline-none"
                        placeholder="Search for Movies, Events, Plays, Sports and Activities"
                    />
                </div>
            </div>
            <div className='flex items-center justify-between gap-3'>
                <span className='text-gray-400 text-xs flex items-center hover:text-white cursor-pointer'>Kangra <IoChevronDownSharp /></span>
                <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>Signin</button>
                <div className='w-full h-full text-white'>
               <IoMdMenu className='w-8 h-8'/>

                </div>

            </div>
        </div>

    </>
}

const MovieNavbar = () => {
    return (
        <>
            <nav className='absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg  lg:bg-gray-500 p-4 w-full'>
                {/*Mobile screen*/}
                <div className='md:hidden'>
                    <Navsm />
                </div>
                {/*Medium screen* (tab)*/}
                <div className='hidden md:block lg:hidden'>
                <Navsm />
                </div>
                {/*Large screen*/}
                <div className='hidden lg:flex'>
                    <Navlg />
                </div>
            </nav>

        </>
    )
}

export default MovieNavbar