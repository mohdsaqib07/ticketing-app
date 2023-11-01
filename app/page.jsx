import React from "react";
import TicketCard from "./(components)/TicketCard";

const getData=async ()=> {
     const response = await fetch("http://localhost:3000/api/Tickets",{
      cache:"no-cache"
    });
 
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch tickets");
    }

    return response.json();
 
}
export default async function Dashboard(){
  const {tickets} = await getData();

  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];
  

  return (
    <div className="p-5">
    
      <div>
        {tickets &&
          uniqueCategories.map((uniquecategory, index) => (
              <div className="mb-4" key={index}>
                <h2>{uniquecategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {tickets.filter((ticket) => ticket.category === uniquecategory ).map((filteredticket,_index)=>(
                   <TicketCard id={filteredticket._id} key={_index*Date.now()} ticket={filteredticket}  />
          ))}
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

// if you want to make a folder inside app that should not serve as routes wrap it inside parenthesis

