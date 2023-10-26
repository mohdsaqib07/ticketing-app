import React from 'react'

const StatusDisplay = ({status}) => {
  return (
    <span className='inline-block rounded-full px-2 py-1 text-sm font-black text-white bg-blue-700 capitalize'>
       {status}
    </span>
  )
}

export default StatusDisplay
