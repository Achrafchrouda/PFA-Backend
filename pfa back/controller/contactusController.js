const contactUsModel = require("../model/contactUsModel");


exports.addContactUs = (req,res)=>{


    console.log(req.body);

    const newContact = new contactUsModel({
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        problem:req.body.problem
    })

        newContact.save().then(data=>{
            res.send(data)
        })

}


exports.fetchData = (req,res)=>{

    contactUsModel.find().then(data=>{

        res.send(data)

    }).catch(err=>{
        res.send(err)
    })


}