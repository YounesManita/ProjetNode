const express=require("express")
const app=express()
const database=require("./config/database")
const UserRoute=require("./Route/UserRoute")
 database()
 app.use(express.json())
app.use("/user",UserRoute)

const port=3001
app.listen(port,()=>{console.log(`seerver is runing at ${port}`);})