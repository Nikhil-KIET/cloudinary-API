const file=require("../Models/Files")
const cloudinary=require("cloudinary").v2;

async function fileUpload(req,res){
    try{
        const {name}=req.body
        console.log(name)
        const file=req.files.img
        console.log(file)
        const path=__dirname+"/myimg"+`${Date.now()}igdata.jpg`
        console.log(__dirname)
        file.mv(path)
       return res.send("file uploaded sucessfully")

    }catch{
        res.status(500).json({message:"Error uploading file"})
    }
}

async function cloudUpload(req,res){
    try{
        const {name}=req.body
        console.log(name)
        const file=req.files.img
        console.log(file)

        let option={
            folder:"imgdb",

        }
        const upload=await cloudinary.uploader.upload(file.tempFilePath,option).catch((err)=>{
            res.status(400).send(err)
        })
        
        console.log(upload)
      
       return res.send("file uploaded sucessfully")

    }catch{
        res.status(500).json({message:"Error uploading file"})
    }
}

module.exports={fileUpload,cloudUpload}