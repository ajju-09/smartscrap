import User from "@/models/User";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
const { connectDB } = require("@/lib/db");
import jwt from "jsonwebtoken";

await connectDB();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({email});

    if(!user){
    return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
    
    const vaildPassword = await bcryptjs.compare(password, user.password);

    if(!vaildPassword){
    return NextResponse.json({ error: "Password is inccorect" }, { status: 400 });
    }

    // At this points password is valid
    // Then we assign a jwt token to user or data

    const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email
    }

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

    const response = NextResponse.json({ message: "User logged In Successfully" , success: true}, { status: 200 })

    response.cookies.set("token", token, { httpOnly: true})
    
    return response;


    }
   catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

