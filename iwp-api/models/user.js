const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    email : {
        type : String , 
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    playlists : [
    
    ],
    // tokens : [{
    //     token : {
    //         type : String,
    //         required : true
    //     }
    // }]
})

const User = mongoose.model("Users" , userSchema)

module.exports = User