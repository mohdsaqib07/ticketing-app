import React from "react";
import TicketCard from "./(components)/TicketCard";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets");
    const data = await res.json(); 
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch tickets");
    }

    return data;
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
}
const Dashboard = async () => {
  let data = await getData();
  let tickets = data.tickets;
  let uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];
  console.log(tickets)

  return (
    <div className="p-5">
    
      <div>
        {tickets &&
          uniqueCategories.map((uniquecategory, index) => (
              <div className="mb-4" key={index}>
                <h2>{uniquecategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {tickets.filter((ticket) => ticket.category === uniquecategory ).map((filteredticket,_index)=>(
                   <TicketCard id={_index} key={_index*Date.now()} ticket={filteredticket}  />
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
export default Dashboard;
