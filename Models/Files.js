const mongoose=require("mongoose");

const files=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("store",files)