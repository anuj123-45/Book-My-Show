import React from 'react'
import { MdOutlineTempleBuddhist } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { SiBookmyshow } from "react-icons/si";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'







const Footer = () => {
  return (
    <>

      <div className='hidden lg:flex '>
        <div className='w-full  bg-anuj-1100 py-14 cursor-pointer'>

          <div className='flex justify-around'>
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-8">
                <MdOutlineTempleBuddhist className="w-full h-full" />
              </div>
              <h2 className="font-bold text-md">List your show</h2>
              <p className="text-sm">
                Got a show, event, activity, or a great experience? Partner with us & get listed on BookMyShow
              </p>
            </div>

            <div className='text-white'>
              <button className='bg-anuj-1000  px-5 py-2 rounded-md'> Conatact today!</button>
            </div>
          </div>

          <div className='w-full bg-anuj-1200 mt-10 py-5'>
            <div className='flex justify-evenly'>

              <div className='flex flex-col items-center text-anuj-1300 hover:text-white gap-2'>
                <div className="w-36 h-14">
                  <MdSupportAgent className="w-full h-full" />
                </div>
                <span className='text-xs'>24/7 CUSTOMER CARE</span>
              </div>

              <div className='flex flex-col items-center text-anuj-1300 hover:text-white gap-2'>
                <div className="w-36 h-14">
                  <IoTicketSharp className="w-full h-full" />
                </div>
                <span className='text-xs'>RESEND BOOKING CONFIRMATION</span>
              </div>

              <div className='flex flex-col items-center text-anuj-1300 hover:text-white gap-2'>
                <div className="w-36 h-14">
                  <SlEnvolopeLetter className="w-full h-full" />
                </div>
                <span className='text-xs'>SUBSCRIBE TO THE NEWSLETTER</span>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center mt-20 px-4 gap-4 '>
            <div className='w-2/3  text-anuj-1300'><hr className='w-full  text-anuj-1300' /></div>
            <div className='w-20 h-14  text-white'>
              <SiBookmyshow className='w-full h-full' />
            </div>
            <div className='w-2/3 '><hr className='w-full  text-anuj-1300' /></div>
          </div>

          <div className='flex justify-center items-center mt-16 gap-5'>
            <Link to='https://www.facebook.com/'>
              <div className="w-10 h-8 text-anuj-1500 hover:text-white">
                <FaFacebook className="w-full h-full" />
              </div>

            </Link>
            <Link to='https://www.twitter.com/'>
              <div className="w-10 h-8 text-anuj-1500 hover:text-white">
                <FaSquareXTwitter className="w-full h-full" />
              </div>
            </Link>
            <Link to='https://www.instagram.com/'>
              <div className="w-10 h-8 text-anuj-1500 hover:text-white">
                <FaInstagramSquare className="w-full h-full" />
              </div>
            </Link>
            <Link to='https://www.youtube.com/'>
              <div className="w-10 h-8 text-anuj-1500 hover:text-white">
                <FaYoutube className="w-full h-full" />
              </div>
            </Link>
            <Link to='https://www.pinterest.com/'>
              <div className="w-10 h-8 text-anuj-1500 hover:text-white">
                <FaPinterest className="w-full h-full" />
              </div>
            </Link>
            <Link to='https://www.linkedin.com/'>
              <div className="w-10 h-8 text-anuj-1500 hover:text-white">
                <FaLinkedin className="w-full h-full" />
              </div>
            </Link>
          </div>


          <div className='flex flex-col items-center text-[11px] mt-14 text-anuj-1500'>
            <p>Copyright 2024 @ Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
            <p>The content and images used in this site are copyright protected and copyrights vtests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. </p>
            <p>Unauthorized use is prohibited and punishable by law. </p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Footer