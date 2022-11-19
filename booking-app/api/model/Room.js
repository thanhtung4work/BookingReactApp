import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
    Price: {
        type: Number,
        require: true
    },   
    MaxPeople: {
        type: Number,
        require: true
    }, 
    Desc: {
        type: String,
        require: true
    },
    RoomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
},
    {timestamps: true}
);

export default mongoose.model("Room", RoomSchema);