const cloudinary=require("cloudinary").v2;


async function cloudConnect(){
 cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECREAT
})
}

module.exports=cloudConnect
