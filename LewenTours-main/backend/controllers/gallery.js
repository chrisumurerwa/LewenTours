const cloudinary = require("../middlewares/cloudinary");
const Gallery = require("../models/gallery");

exports.createGallery = async(req,res,next)=>{
    const images = [];
    const { title } = req.body;
    for(let i=0;i< req.files.length; i++){
        console.log(req.files[i].path);
        const result = await cloudinary.uploader.upload(req.files[i].path, {
             unique_filename:false, 
             folder:"Lewen Tours",
             use_filename:true
            });
        images.push({
            public_id: result.public_id,
            image_url: result.secure_url
        });
    }

    try {
        // const output = await Gallery.create({title: title, images: images});
        res.status(200).json({
            success:true,
            data: "Images created successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error: error
        })
    }

}