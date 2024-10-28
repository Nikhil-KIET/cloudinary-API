const express=require("express");
const app=express();

const upload=require("express-fileupload")

require("dotenv").config();

app.use(express.json());

app.use(upload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


app.listen(process.env.PORT,()=>{
    console.log("server started at PORT ",process.env.PORT)
})

app.get("/",(req,res)=>{
    console.log("hi")
    res.send("hi i am nikhil")
})

const router=require("./Router/Routes");
 require("express-fileupload");

app.use("/api",router)

const cloudConnect=require("./Config/cloudConnect")
cloudConnect().then(()=>console.log("cloud connected")).catch(()=>{
    console.log("cloud connection failed")
});


