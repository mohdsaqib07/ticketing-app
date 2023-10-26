import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriorityDisplay = ({priority}) => {
  return (
    <div className='flex items-baseline justify-start'>
      
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 0 ?" text-red-400 group-hover:text-red-600":"text-slate-200 group-hover:text-slate-950"}`} />
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 1 ?" text-red-400 group-hover:text-red-600":"text-slate-200 group-hover:text-slate-950"}`} />
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 2 ?" text-red-400 group-hover:text-red-600":"text-slate-200 group-hover:text-slate-950"}`} />
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 3 ?" text-red-400 group-hover:text-red-600":"text-slate-200 group-hover:text-slate-950"}`} />
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 4 ?" text-red-400 group-hover:text-red-600":"text-slate-200 group-hover:text-slate-950"}`} />
    </div>
  )
}

export default PriorityDisplay
