
const newUserModel = require('../model/NewUserModel')

exports.login = (req,res)=>{

    const username = req.body.username;
    const password = req.body.password

    newUserModel.findOne({username:username,password:password})
    .then(data=>{

        if(data) return res.send(data)
        else return res.send("failed")
        
        
    }).catch(error=>{
        res.send(error)
    })
}


