// const { response } = require("express");
// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();
const { v4: uuidv4 } = require('uuid');


// const User = require("../models/user");

// router.get("allPlaylist" , async(request , response) => {
//     console.log("allPlayList");
//     const email = request.params.email;
//     const user = await User.find({email});
//     const ans = [];
//     const playList = user.playlists;
//     playList.forEach(element => {
//         ans.push(element.name);
//     });
//     response.send(ans);
// })

// router.post("allPlaylist/:email/:playlist" , async(request , response) => {
//     const email = request.params.email;
//     const user = await user.find({email});
//     const playlist = user.playLists;
//     const object = {
//         name : request.params.playList,
//         id : uuidv4(),
//         items : []
//     }
//     playlist.push(request.params.playList);
//     console.log(user);
//     response.status.send({
//         message : "success"
//     })
// })

const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user");
const Items = require('../models/items');

// /:email/:password
router.get("/allPlaylist/:email" , async(request , response) => {
    // console.log("allPlayList");
    const email = request.params.email;
    try{
        const user = await User.find({email});
        const ans = [];
        const playList = user[0].playlists;
        playList.forEach(element => {
            ans.push({
                name : element.name,
                id : element.id,
                createdAt : element.createdAt
            });
        });
        response.send(ans);
    }
    catch(e){
        response.send(e);
    }
    
})

router.post("/allPlaylist/:email/:playlist/:createdAt" , async(request , response) => {
    const email = request.params.email;
    const createdAt = request.params.createdAt;
    // console.log("called");
    try{
        let user = await User.find({email});
        // const object = {
        //     name : request.params.playlist,
        //     id : uuidv4()
        // }
        const item = new Items({
            list : [],
            id : uuidv4()
        })
        await item.save();
        user[0].playlists = user[0].playlists.concat({
            name : request.params.playlist,
            id : item.id,
            createdAt : createdAt
        });
        await user[0].save();
        console.log(item);
        // console.log(user[0]);
        // console.log("success");
        response.status(200).send({
            message : "success"
        })
    }
    catch(e){
        response.send(e);
    }
})

module.exports = router;