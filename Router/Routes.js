const express=require("express");
const router=express.Router();

const {fileUpload,cloudUpload}=require("../Controller/controller")

router.get("/home",(req,res)=>{
    res.status(200).send("hi the router is working fine")
})

router.post("/upload",fileUpload)
router.post("/cloudupload",cloudUpload);




module.exports=router