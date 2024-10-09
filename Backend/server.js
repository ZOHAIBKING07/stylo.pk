const express = require("express");
const app=express();
require('dotenv').config()
const connectdb=require('./config/db');
const PORT=process.env.PORT || 9000;

connectdb();

app.get("/",(req,res)=>{
    res.json({success:true,message:"Welcome to the Express",status:200});
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})