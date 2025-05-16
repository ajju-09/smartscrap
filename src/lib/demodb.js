import mongoose from "mongoose";
import { promise } from "zod";

const cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn: null, promise: null};
}

export default async function connectDB(){
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: true
        }

        cached.promise = mongoose.connect(process.env.MONGODB || "" , opts)
        
        .then((mongoose) => {
            console.log("Mongodb connection successfull");
            return mongoose;
        })
        .catch((err) => {
            console.log("Error in connection", err);
            throw err
        })
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error
    }

    return cached.conn
}