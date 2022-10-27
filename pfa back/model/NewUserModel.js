

const mongoose = require("mongoose");

const newUser = new mongoose.Schema({


    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:false
    },

    role:{
        type:String,
        required:false,
        default:"client"
    }


});


module.exports = mongoose.model("newUser",newUser);