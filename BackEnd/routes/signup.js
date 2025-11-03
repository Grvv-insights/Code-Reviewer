const express = require("express");     //lib to make http server
const jwt = require("jsonwebtoken");    //lib to assign and verify token which is given to each user(by that we'll identify him and will response him(harshit-at the time of signin))
const router = express.Router();        //jis file ko apne ko export krana hai us file ko request bhejdeta hai taki ending me apne mainfile me import kra sake

const secret = "bankai";

const { User } = require("../database/index");  //importing user model from database

router.post("/signup", async(req, res) => {
    const { username, password } = req.body;
    const checkUser = await User.findOne({ username, password });
    if(checkUser)
        return res.status(404).json({ message : "You already have an account created" });
    const findUser = await User.findOne({ username });      //game eg:already have name
    if(findUser)
        return res.status(409).json({ message : "This username already exists" });
    const newUser = new User({ username, password });
    await newUser.save();
    const token = jwt.sign({ userId : newUser._id }, secret, { expiresIn : "7d" });
    res.status(200).json({ message : "User created successfully", Token : token });
});

module.exports = router;