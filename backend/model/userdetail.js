const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})


const user = mongoose.model("userdetail",UserSchema);
module.exports = user;