import { getDataFromToken } from "@/helper/getDataFromToken";
import { connectDB } from "@/lib/db";
import Recycle from "@/models/Recycle";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const userId = await getDataFromToken(request);

    const formData = await request.formData();

    const itemtype = formData.get("itemtype");
    const quantity = formData.get("quantity");
    const phone = formData.get("phone");
    const pincode = formData.get("pincode");

    const images = formData.getAll("images");

    const result = await Promise.all(
        images.map(async (file) => {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer)

            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {resource_type: 'auto'},
                    (error, result) => {
                        if(error){
                            reject(error)
                        } else {
                            resolve(result)
                        }
                    }
                )
                stream.end(buffer)
            })
        })
    )
    const image = result.map(result => result.secure_url)
    await connectDB();

    const newProduct = await Recycle.create({
        userId,
        itemtype,
        quantity: Number(quantity),
        phone: Number(phone),
        pincode: Number(pincode),
        image

    })


    return NextResponse.json(
      {
        message: "Recycling data created",
        success: true,
        newProduct
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in Recycling");
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
