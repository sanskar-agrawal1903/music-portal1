const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user");

// /:email/:password
router.post("/signup/:email/:password" , async(request , response) => {
    // https://localhost:7000/signup/harshitgoel1110@gmail.com/abcdef@1
    console.log(request.params);
    const user = new User({
        email : request.params.email ,
        password : request.params.password
    });
    try{
        await user.save();
        console.log("success");
        response.status(201).send({message : "success"});
    }
    catch(e){
        console.log("failure");
        response.status(200).send({
            message : "error"
        });
    }
})

router.get("/login/:email/:password" , async(request , response) => {
    const email = request.params.email;
    const password = request.params.password;
    const user = await User.find({email , password});

    // response.send(user);

    console.log(email + " " + password + " " + user);
    if(user.length === 0 || user[0].password !== password){
        response.status(200).send({
            message : "not found"
        });
        return;
    }
    else{
        response.status(200).send({
            message : "success"
        })
    }
})

router.get("/a" , async(request , response) => {
    response.status(200).send("working fine");
})

module.exports = router;