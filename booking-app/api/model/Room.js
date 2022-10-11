import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    idRealEstate: {
        type: String,
        require: true
    },  
    Slot: {
        type: Number,
        require: true
    }, 
    Price: {
        type: Number,
        require: true
    }, 
    checkoutDate: {
        type: Date,
        require: true
    }, 
    status: {
        type: String,
        require: true
    }

});

export default mongoose.model("Room", RoomSchema);