const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const itemsSchema = new mongoose.Schema({
    list : []
    // tokens : [{
    //     token : {
    //         type : String,
    //         required : true
    //     }
    // }]
})

const Items = mongoose.model("Items" , itemsSchema)

module.exports = Items