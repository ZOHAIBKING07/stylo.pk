 const express = require('express');
 const router= express.Router();
const controller=require("../controllers/product.controller")
//  const productController = require('../controllers/product.controller');
 

 router.post("/", controller.store)
router.get("/", controller.index)
router.get("/:id", controller.get)
router.delete("/:id", controller.destroy)
router.put("/:id", controller.update)

// router.get('/product/:id', productController.get);


 module.exports = router;

