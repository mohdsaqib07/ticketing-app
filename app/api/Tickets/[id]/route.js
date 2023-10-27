import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}){
  try{
       const {id} = params
       await Ticket.findByIdAndDelete(id);
       return NextResponse.json({success:true,message:"Ticket Deleted"},{status:200});
  }catch(err){
    return NextResponse.json({message:"Error",err},{status:500})
  }
}

export async function GET(req,{params}){
  try{
    const {id} = params
    const ticket = await Ticket.findById(id);
    return NextResponse.json({message:"Ticket Fetched Successfully",ticket},{status:200})
  }catch(err){
    return NextResponse.json({message:"Error",err},{status:500})
  }
}

export async function PUT(req,{params}){
   try {
    const {id} = params
    const body = await req.json();
    const ticketdata = body.formData;
    await Ticket.findByIdAndUpdate(id,{...ticketdata});
    console.log(ticketdata)

    return NextResponse.json({ message: "Ticket Updated" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}