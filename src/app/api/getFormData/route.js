import { connectDB } from "@/lib/db";
import Recycle from "@/models/Recycle";
import { NextResponse } from "next/server";


export async function GET(request){
  try {
    await connectDB();

    const cardDetails = await Recycle.find().sort({ createdAt: -1}).populate("userId", "username email");

    if(!cardDetails){
      console.log("Card details not found");
      return NextResponse.json({message: "Card details not found"}, {status: 400});
    }

    return NextResponse.json({message: "Card details found", data: cardDetails}, {status: 200});

  } catch (error) {
    
  }
}