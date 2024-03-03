const express=require("express")
const router=express.Router()
const UserControllers=require("../Controllers/UserControllers")
router.post("/singup",UserControllers.Singup)
module.exports=router