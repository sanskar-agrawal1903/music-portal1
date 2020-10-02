const express = require("express");
require("dotenv").config({path: ".env"});
require("./src/database/name");
// import { v4 as uuidv4 } from 'uuid';

const login = require("./src/routes/login");
const testApi = require("./src/routes/testApi");
const playlistName = require("./src/routes/playlistName");
const items = require("./src/routes/items");

const app = express();
const PORT = 3000;

app.use(express.json())

app.use("/" , login);
app.use("/testApi" , testApi);
app.use("/" , playlistName);
app.use("/" , items);

app.listen(PORT , ()=>{
    console.log("the server is up in running")
})