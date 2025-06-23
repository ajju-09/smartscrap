import { connectDB } from "@/lib/db";
import Recycle from "@/models/Recycle";
import { NextResponse } from "next/server";


export async function DELETE(request) {
    try {
        await connectDB();
        const { id } = await request.json();
        const deleteCard = await Recycle.findByIdAndDelete(id);

        if(!deleteCard) {
            return NextResponse.json({message: "Card not found"}, {status: 400});
        }

        return NextResponse.json({message: "Card deleted successfully", success: true}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}