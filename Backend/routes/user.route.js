const express = require('express');
const router= express.Router();
const controller=require("../controllers/user.controller")



router.post("/", controller.store)
router.post("/login", controller.login)
// router.get("/", controller.index)
router.get("/:id", controller.get)
router.post("/verify", controller.verifyUser)
// router.delete("/:id", controller.destroy)
// router.put("/:id", controller.update)

// router.get('/product/:id', productController.get);


module.exports = router;

