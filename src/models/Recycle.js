import mongoose, { Schema } from "mongoose";


const RecycleSchema = new Schema({
    userId: {
        type: String,
        ref: 'users',
        required: true
    },
    itemtype: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    image: { type: Array, require: true},
}, {
    timestamps: true
})

const Recycle = mongoose.models.recycle || mongoose.model("recycle", RecycleSchema); 

export default Recycle;