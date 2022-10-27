
const express = require("express");
const path = require("path");
const cors = require('cors');
require("body-parser")
require("./connection");
const contactUs = require('./routes/contactus')
const newUserRoute = require("./routes/newUserRoute")
const loginRoute = require("./routes/loginRoute")


// initialise app
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// body-parser config
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.get('/',function(req,res){
    res.render("home");
})

app.use('/contact',contactUs)
app.use("/register",newUserRoute)
app.use("/login",loginRoute)


app.listen(3000,()=>{
    console.log('Server listen on port 3000')
})