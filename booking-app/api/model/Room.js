import mongoose from "mongoose";
const { Schema } = mongoose;

var ObjectId = Schema.Object;
const RoomSchema = new mongoose.Schema({
    idRealEstate: {
        type: ObjectId,
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