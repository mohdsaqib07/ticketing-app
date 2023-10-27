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
          const tickets = await Ticket.find()
        
          return NextResponse.json({"tickets":tickets})

       
     }catch(err){
          return NextResponse.json({ message: "Error", err }, { status: 500 });
     }
}