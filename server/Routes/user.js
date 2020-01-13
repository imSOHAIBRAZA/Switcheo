const express = require('express');
const Router= express.Router();
const User=require("../database/models/userModel")
Router.post("/getuser",(req,res)=>{
    User.findById(req.user._id,(err,user)=>{
        if(err) return res.status(400).json("user not found");
        user.password=null;
        return res.status(200).json({user});
    })
})

module.exports= Router;
