const mongoose=require("mongoose")
const database=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/reservationSalle")

        console.log( "Database connected successfully");
    } catch (error) {
        console.log("database  connection error",error);
    }
}
module.exports = database;