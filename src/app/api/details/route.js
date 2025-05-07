import { getDataFromToken } from "@/helper/getDataFromToken";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";




await connectDB();

export async function GET(request){
   try {
      const userId = await getDataFromToken(request);
      const user = await User.findOne({_id: userId}).select("-password");
   
      if(!user) {
       return NextResponse.json({message: "User not found"}, {status: 400});
      }
   
      return NextResponse.json({message: "User found ",
       data: user
      }, {status: 200});

   } catch (error) {
      return NextResponse.json({error: error.message}, {status: 500});
   }

}