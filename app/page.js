import React from "react";
import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return <div className="">
    <TicketCard />
    <TicketCard />
    <TicketCard />
    </div>;
};
// if you want to make a folder inside app that should not serve as routes wrap it inside parenthesis
export default Dashboard;
