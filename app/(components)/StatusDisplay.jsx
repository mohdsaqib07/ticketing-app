import React from 'react'

const StatusDisplay = ({status}) => {
  const getColor = (status)=>{
    let color = 'bg-blue-700'
    switch(status.toLowerCase()) {
      case "started":
        color = 'bg-red-700'
        return color
      case "not started":
        color = 'bg-green-700'
        return color
      case "done":
        color = 'bg-blue-700'
        return color
      default:
        return color
    }
  }
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-sm font-black text-white ${getColor(status)} capitalize`}>
       {status}
    </span>
  )
}

export default StatusDisplay
