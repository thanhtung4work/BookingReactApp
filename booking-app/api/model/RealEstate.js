import mongoose from "mongoose";
const { Schema } = mongoose;

var ObjectId = Schema.Object;
const RealEstateSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },  
    Address: {
        type: String,
        require: true
    }, 
    Detail: {
        type: String,
        require: true
    }, 
    Type: {
        type: String,
        require: true
    }, 
    Img: {
        type: [String],
        require: true
    }, 
    LowPrice: {
        type: Number,
        require: true
    }

});

export default mongoose.model("RealEstate", RealEstateSchema);