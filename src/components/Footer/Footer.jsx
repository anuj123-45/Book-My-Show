import React from 'react'
import { MdOutlineTempleBuddhist } from "react-icons/md";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { LuTickets } from "react-icons/lu";






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
          

     
        </div>
      </div>

    </>
  )
}

export default Footer