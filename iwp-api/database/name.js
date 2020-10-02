const mongoose = require("mongoose")
require("dotenv").config()

// connect to database
mongoose.connect('mongodb://localhost/my_database' , {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology: true
})

mongoose.connection.once("open" , function(){
    console.log("connections has been made");
}).on("error" , function(error){
    console.log("connections error" , error);
})