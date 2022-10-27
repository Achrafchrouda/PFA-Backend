
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://achraf:achraf123@cluster0.du4eoo1.mongodb.net/?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true},function(err){
    if(err){
        console.log(err)   
    }
    else console.log("connect to data base");
    });
module.exports = mongoose;  