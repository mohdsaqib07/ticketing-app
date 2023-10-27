"use client";
import { useRouter } from 'next/navigation'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteBlock = ({id}) => {
  const router = useRouter();
  const deleteTicket=async ()=>{
   
   const response  = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
    method:"DELETE"
   })
   if(response.ok){
    router.refresh();
   }
  }
  return (
    <FontAwesomeIcon icon={faX} className='text-red-600 hover:cursor-pointer hover:text-red-950' onClick={deleteTicket} />
  )
}

export default DeleteBlock
