 const express = require('express');
 const router= express.Router();
const controller=require("../controllers/product.controller")
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
//  const productController = require('../controllers/product.controller');
 

router.post("/",upload.single('thumbnail'), controller.store)
router.get("/", controller.index)
router.get("/:id", controller.get)
router.delete("/:id", controller.destroy)
router.put("/:id", controller.update)

// router.get('/product/:id', productController.get);


 module.exports = router;

