import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authroute from "./routes/auth.js"
import hotelsroute from "./routes/hotels.js"
import roomsroute from "./routes/rooms.js"
import usersroute from "./routes/users.js"
import e from "express"


dotenv.config()
const app=express()
const conn=async()=>{
      try {
            await mongoose.connect("mongodb+srv://mzc_mca:qwerty.1@cluster0.weiqp.mongodb.net/booking");
            console.log("runnings MONGO")
      
          } catch (error) {
            throw error;
          } 

}
// mongoose.connection.on("connected", ()=>{
//       console.log("mongoose connected")

// })
mongoose.connection.off("connected", ()=>{
      console.log("mongoose disconnected")

})
app.use(express.json())
//midleware
app.use("/auth",authroute)
app.use("/users",usersroute)
app.use("/hotels",hotelsroute)
app.use("/rooms",roomsroute)
app.listen(4000,()=>{
      conn()
      console.log("runnings")
})