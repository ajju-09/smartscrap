import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
   username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true
   },
   email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true
   },
   password: {
    type: String,
    required: [true, "Please provide a password"],
   },
   role: {
      type: String,
      enum: ["user", "vendor"],
      default: "user",
   },
   isVerified: {
    type: Boolean,
    default: false
   },
   isAdmin: {
    type: Boolean,
    default: false
   },
   forgotPasswordToken: String,
   forgotPasswordTokenExpiry: Date,
   verifyToken: String,
   verifyTokenExpiry: Date
}, {
   timestamps: true 
 });

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
