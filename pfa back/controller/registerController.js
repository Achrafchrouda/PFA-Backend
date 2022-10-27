
const newUserModel = require("../model/NewUserModel")


exports.register = (req,res)=>{



    const newUser = new newUserModel({
        
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone,
        role:req.body.role
    })

        newUser.save().then(data=>{
            res.send(data)
        })


}