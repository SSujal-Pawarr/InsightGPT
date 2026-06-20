import express from "express";
import Thread from "../models/Thread.js";

const router=express.Router();

//test
router.post("/test",async(requestAnimationFrame,res)=>{
    try{
        const thread=new Thread({
            threadId:"xyz",
            title:"Testing new Thread"
        });
        const response=await thread.save();
        res.send(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to save in DB"});
        
    }
});

//Get all threads

router.get("/thread",async(req,res)=>{
     try{
        const threads =(await Thread.find({})).Sorted({updatedAt:-1});
        // descending order of updatedAt... most recent data on top
        res.json(threads);
     }catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch threads"});
        
     }
     
})



export default router;