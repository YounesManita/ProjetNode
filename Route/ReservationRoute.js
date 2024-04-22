const express=require("express")
const router=express.Router()
const Reservationcontrollers=require("../Controllers/ReservationControllers")
const { validatelogin ,isAdmin,isuser} = require("../Midalwares/JwtValidate")
router.post("/ajouter/:id",validatelogin,Reservationcontrollers.addReservation)
router.put("/update/:id",validatelogin,Reservationcontrollers.updateReservation)
router.delete("/delete/:id",validatelogin,Reservationcontrollers.deleteReservation)
router.put("/annulerreservation/:id",validatelogin,Reservationcontrollers.annullerreservation)
router.get("/getallreservation/",validatelogin,isAdmin,Reservationcontrollers.getAllresrrvationarchiver)
router.get("/getonereservation/:id",validatelogin,Reservationcontrollers.getReservation)
router.get("/getreservationbyuser/:id",validatelogin,isuser,Reservationcontrollers.getreservatyByuser)




module.exports=router