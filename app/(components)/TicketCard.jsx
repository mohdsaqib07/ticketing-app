import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import { format } from 'date-fns'
import Link from "next/link";
const TicketCard = ({ticket,id}) => {
  const formatPattern = 'dd-MM-yy hh:mm a';
  return (
    <div className="flex flex-col bg-slate-950 hover:bg-red-50 rounded-md shadow-lg p-3 m-2 transition-colors duration-200 group">
      
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={id} />
        </div>
      </div>
      <Link href={`/TicketPage/${id}`} style={{display:"content"}}>
      <h4 className="group-hover:text-black font-extralight">{ticket.title}</h4>
      <hr className="h-px border-0 bg-[lightgray] group-hover:bg-slate-950 mb-2" />
      <p className="whitespace-pre-wrap group-hover:text-black">
        {ticket.description}
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1 group-hover:text-black">{format(new Date(ticket.createdAt),formatPattern)}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className='ml-auto flex items-end'>
        <StatusDisplay status={ticket.status} />
        </div>
      </div>
      </Link>
    </div>
  );
};

export default TicketCard;
