const multer = require("multer");
const storage = multer.diskStorage({
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+file.originalname);
    }
})


exports.upload = multer({storage});