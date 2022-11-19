import mongoose from "mongoose";
const { Schema } = mongoose;

var ObjectId = Schema.Object;
const RealEstateSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Type: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    }, 
    Address: {
        type: String,
        require: true
    }, 
    Distance: {
        type: String,
        require: true
    }, 
    Photos: {
        type: [String],
    },
    Title: {
        type: String,
        require: true
    }, 
    Desc: {
        type: String,
        require: true
    },
    Rating: {
        type: Number,
        min: 0,
        max: 5,
    },  
    Rooms: {
        type: [String],
      },
      CheapestPrice: {
        type: Number,
        require: true
    },
    Featured: {
        type: Boolean,
        default: false,
      }

});

export default mongoose.model("RealEstate", RealEstateSchema);