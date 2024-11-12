 const express = require('express');
 const router= express.Router();
 const productRouter=require("./product.route")
 const userRouter=require("./user.route")


 router.use("/product",productRouter)
 router.use("/user",userRouter)


 module.exports=router;

