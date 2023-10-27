import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id)=>{
 
     const response = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
      cache:"no-store"
     })
     if(!response.ok){
      throw new Error("Failed to fetch the ticket")
     }
     return response.json();           
}

const TicketPage = async ({ params }) => {
 
  const {id} = params
  const EDITMODE = id === 'new' ? false : true
  let updateticketdata = {};
  if(EDITMODE){
    updateticketdata = await getTicketById(id)
    updateticketdata = updateticketdata.ticket;

  }
  else{
    updateticketdata = {
      _id:"new"
    }
 
  }
  return  <TicketForm ticket={updateticketdata} />

};

export default TicketPage;
