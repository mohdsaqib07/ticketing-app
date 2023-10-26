import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-slate-950 hover:bg-red-50 rounded-md shadow-lg p-3 m-2 transition-colors duration-200 group">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="group-hover:text-black font-thin">Ticket Title</h4>
      <hr className="h-px border-0 bg-[lightgray] group-hover:bg-slate-950 mb-2" />
      <p className="whitespace-pre-wrap group-hover:text-black">
        this is the ticket description ! please do the ticket
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1 group-hover:text-black">10/26/23 2:30PM</p>
          <ProgressDisplay />
        </div>
        <div className='ml-auto flex items-end'>
        <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
