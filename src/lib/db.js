import mongoose, { connect } from "mongoose";

export async function connectDB(){ 
    try {
         await mongoose.connect(process.env.MONGODB_URI);
          const connection = mongoose.connection;

          connection.on("connected",() => {
            console.log("Mongodb connected");
            
          });

          connection.on("error",(err) => {
            console.log("Mongodb connection error", err);
            process.exit();
          })


    } catch (error) {
        console.log("Something went wrong connecting to database");
        console.log(error);
    }
}
