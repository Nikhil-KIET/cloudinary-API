const mongoose =require("mongoose");
require("dotenv").config();

async function dbConnect(){
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("DB CONNECTION SUCESSFULL");
    }).catch(()=>{
        console.log("db conection failed")
        process.exit(1)
    })
}

module.exports=dbConnect