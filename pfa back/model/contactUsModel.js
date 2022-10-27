

const mongoose = require("mongoose");

const newProblem = new mongoose.Schema({

    nom:{
        type:String,
        required:true
    },

    prenom:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },


    problem:{
        type:String,
        required:false
    },



});


module.exports = mongoose.model("NewProblem",newProblem);