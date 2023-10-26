import React from 'react'

const ProgressDisplay = ({progress}) => {
  return (
    <div className='bg-gray-50 rounded-full w-full h-2.5 group-hover:outline outline-blue-700 outline-1'>
      <div className='bg-blue-700 h-2.5 rounded-full' style={{width:`${progress}%`}}></div>
    </div>
  )
}

export default ProgressDisplay
