const express = require("express");
const router = express.Router();
const User = require("../model/userdetail");

router.get("/", async(req,res)=>{
    try {
        const user = await User.find();
        res.json(user)
    } 
    catch (error) {
        res.status(200).json({
            status: "failed",
            error: error.message
        })
        
    }
})






router.get("/:id",async(req,res)=>{
    try {
        const pid = req.params.id;
        const user = await User.findById(pid);
        console.log(user)
        res.json(user)
    } catch (error) {
        res.status(200).json({
            status: "failed",
            error: error.message
        })
    }
    
   
})


router.put("/:id",async(req,res)=>{
    console.log(req.body)
    try {
        const user = await User.findByIdAndUpdate({_id: req.params.id},req.body,{new:true})
        res.json({
            status:"user updated",
            data: user
        })
    } 
    catch (error) {
        res.status(400).json({
            status:"error",
            message:error.message 
        })
        
    }
})






module.exports = router