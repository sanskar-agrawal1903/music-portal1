const { response, request } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user");
const Items = require("../models/items");

// /:email/:password
router.get("/items/:email/:id" , async(request , response) => {
    const email = request.params.email;
    const id = request.params.id;
    try{
        // response.send(await Items.find({}));
        const list = await Items.find({_id : id});
        console.log(list);
        response.status(200).send(
            list[0].list
        );
        // let user = await User.find({email});
        // user = user[0];
        // const playlists = user.playlists;
        // const required = playlists.find(x => x.id === id).items;
        // // console.log(required);
        // // console.log(user);
        // // console.log(playlists);
        // response.send(required).status(200);
    }
    catch(e){
        response.status(200).send({
            message : "error"
        })
    }
})

router.post("/items/:email/:id/:new" , async(request , response) => {
    const email = request.params.email;
    const id = request.params.id;
    const newName = request.params.new;
    try{
        console.log(email);
        console.log(id);
        console.log(newName);
        let item = await Items.find({_id : id});

        item[0].list = item[0].list.concat(newName);
        await item[0].save();
        response.send({
            message : "success"
        })

        // const user = await User.find({email});
        // const playlists = user[0].playlists;

        // const playlists = user[0].playlists;
        // let required = playlists.find(x => x.id === id).items;
        
        // required = required.concat(newName);
        // console.log(required);

        // for(let i=0;i<playlists.length;i++){
        //     if(playlists[i].id === id){
        //         const a = playlists[i].items.concat(newName);
        //         // console.log(a);
        //         playlists[i].items = a;
        //         // await playlists[i].save();
        //         // console.log(playlists[i]);
        //         // await user[0].save();
        //     }
        // }

        // await user[0].save();
        // response.status(200).send({
        //     message : "success",
        //     user : user[0]
        // })
    }
    catch(e){
        response.status(200).send({
            message : "error"
        })
    }
})

router.post("/items/:email/:id/remove/:name" , async(request , response) => {
    const id = request.params.id;
    const remove = request.params.name;
    try{
        const item = await Items.find({_id : id});
        const arr = [];
        item[0].list.forEach(element => {
            if(element !== remove)
                arr.push(element);
        });
        item[0].list = arr;
        await item[0].save();
        console.log(item[0]);
        response.status(200).send({
            message : "success"
        })
    }
    catch(e){
        response.status(200).send({
            message : "error"
        })
    }
})

router.post("/item/removeAll/:email/:id" , async(request , response) => {
    const id = request.params.id;
    // console.log("working");
    try{
        const item = await Items.find({_id : id});
        item[0].list = item[0].list.filter(a => {
            return false;
        });
        await item[0].save();
        console.log(item[0]);
        response.status(200).send({
            item
        })
    }
    catch(e){
        response.status(200).send({
            message : "error"
        })
    }
    // response.send(await Items.find({_id : id}));
})

router.get("/a" , async(request , response) => {
    response.status(200).send("working fine");
})

module.exports = router;