import mongoose from "mongoose";
const { Schema } = mongoose;

var ObjectId = Schema.Object;
const UserSchema = new mongoose.Schema({
    Lastname: {
        type: String,
        require: true
    },  
    Firstname: {
        type: String,
        require: true
    }, 
    Username: {
        type: String,
        required: true,
        unique: true,
      },
    Email: {
        type: String,
        required: true,
        unique: true,
      },
    Country: {
        type: String,
        required: true,
      },
    Img: {
        type: String,
      },
    City: {
        type: String,
        required: true,
      },
    Phone: {
        type: String,
        required: true,
      },
    Password: {
        type: String,
        required: true,
      },
    IsAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }

);

export default mongoose.model("User", UserSchema);