import React from 'react'

const Cast = (props) => {
  return (
    <>
    <div>
    <div className='flex flex-col items-center'>
        <div className='w-32 h-32'>
          <img src={props.src} alt="cast" className='w-full h-full rounded-full' />
        </div>   <h1 className='text-lg font-bold text-gray-700'>{props.name}</h1>
        <h5 className='text-xs  text-gray-400'>{props.role}</h5>
      </div>
    </div>



    </>
  )
}

export default Cast
