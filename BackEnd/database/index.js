const mongoose = require("mongoose");   //library to communicate with databases
// for SIGNIN Page (Schema1)
const userSchemas = new mongoose.Schema({   //schema=fn
    username : String,
    password : String
});
// for conversation (Schema2)
const conversationSchemas = new mongoose.Schema({
    userId : {      //go to mongodb compass for understanding
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true
    },
    aiResponse : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,    //date =class,date.now=fn(tells current time)
        default : Date.now
    }
});
//schema=design,model will implement that design
const User = mongoose.model("Users", userSchemas);
const Conversation = mongoose.model("Conversation", conversationSchemas);

module.exports = {
    User,
    Conversation
};