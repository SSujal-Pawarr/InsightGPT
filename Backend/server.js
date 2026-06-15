import express from "express";
import "dotenv/config";
import cors frmo "cors";

const app=express();
const PORT=8080;

app.use(express.json())
app.use(cors())
app.listen(PORT,()=>{
  console.log("Server Running on $(PORT)");
});

app.post("/test",async(req,res)=>{
  const options={
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:"application/json",
    },
    body: JSON.stringify({
      model:"gpt-4o-mini",
      messages:[{
        role:"user",
        content:req.body.message
      }]
    })
  };
})
