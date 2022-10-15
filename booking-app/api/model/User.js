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
    BirthDate: {
        type: Date,
        require: true
    }, 
    NationalID: {
        type: [String],
        require: true
    }, 
    Email: {
        type: String,
        require: true
    }, 
    Phone: {
        type: String,
        require: true
    },
    Avatar: {
        type: String,
        require: true
    },
    Role: {
        type: String,
        require: true
    },
    Username: {
        type: String,
        require: true,
        unique: true,
        dropDups: true
    }, 
    Password: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    }

});

export default mongoose.model("User", UserSchema);