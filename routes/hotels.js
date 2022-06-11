import express from "express"
const router=express.Router()
import Hotel from '../models/Hotel.js'
//create
router.post("/",async(req,res)=>{
      var data=req.body
      const newmodel=new Hotel(req.body)
      newmodel.save().then(()=>{res.send(data)})

      
      // try{
      //       const savedhotel=await newmodel.save()
      //       res.status(200).json(savedhotel)
      // }catch(err){
      //       res.status(500).json(err)
      // }
})
export default router