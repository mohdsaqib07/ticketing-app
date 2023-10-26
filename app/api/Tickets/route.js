import Ticket from "../../(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketdata = body.formData;
    await Ticket.create(ticketdata);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


export async function GET(req){
     try{
        Ticket.find({}).then(function(tickets){
          console.log(tickets)
          console.log("Total number of tickets are : ",tickets.length)
          return NextResponse.json({tickets:tickets},{status:200})

        }).catch(function(err) {
          console.log(err.message)
          return NextResponse.json({ message: "Error", err }, { status: 500 })
        });
     }catch(err){
          return NextResponse.json({ message: "Error", err }, { status: 500 });
     }
}