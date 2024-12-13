import React from 'react'
import { MdOutlineTempleBuddhist } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";








const Footer = () => {
  return (
    <>

      <div className='hidden lg:flex '>
        <div className='w-full  bg-anuj-1100 py-5'>

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

          <div className='w-full bg-anuj-1200 mt-5 py-5'>
            <div className='flex justify-around'>

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













        </div>
      </div>

    </>
  )
}

export default Footer