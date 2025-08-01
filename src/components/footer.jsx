import React from 'react'
import { GoHeartFill } from "react-icons/go";

const footer = () => {
  return (
    <div className=' bg-blue-400 ' >
        <div className='font-bold flex justify-center'>
          <span className="text-blue-200">&lt;</span>
          Any
          <span className="text-blue-200">Pass/&gt;</span>
        </div>
      <div className='flex justify-center items-center gap-2'>
        <span>
            Created with 

        </span>
        <GoHeartFill className='fill-red-600 '/>
        <span>
            and a lot of ctrl + Z
        </span> 
      </div>
    </div>
  )
}

export default footer
