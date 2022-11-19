import mongoose from "mongoose";
const { Schema } = mongoose;

var ObjectId = Schema.Object;
const TrasactionSchema = new mongoose.Schema({
    IdUser: {
        type: String,
        require: true
    },  
    IdRoom: {
        type: String,
        require: true
    }, 
    CheckinDate: {
        type: Date,
        require: true
    }, 
    CheckoutDate: {
        type: Date,
        require: true
    }, 
    PaymentDate: {
        type: Date
    }, 
    Price: {
        type: Number,
        require: true
    },
    Surchanrge: {
        type: Number,
        require: true
    },
    Total: {
        type: Number,
        require: true
    },
    PaymentMethod: {
        type: String
       
    }, 
    Rating: {
        type: Number,
        min: 0,
        max: 5
    },
    feedback: {
        type: String,
     
    }

});

export default mongoose.model("Trasaction", TrasactionSchema);