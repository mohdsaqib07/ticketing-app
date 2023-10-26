import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ticket,id}) => {
  return (
    <div className="flex flex-col bg-slate-950 hover:bg-red-50 rounded-md shadow-lg p-3 m-2 transition-colors duration-200 group">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="group-hover:text-black font-extralight">{ticket.title}</h4>
      <hr className="h-px border-0 bg-[lightgray] group-hover:bg-slate-950 mb-2" />
      <p className="whitespace-pre-wrap group-hover:text-black">
        {ticket.description}
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1 group-hover:text-black">{new Date(ticket.createdAt).toDateString()}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className='ml-auto flex items-end'>
        <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
