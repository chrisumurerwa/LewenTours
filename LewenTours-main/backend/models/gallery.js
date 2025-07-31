const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Category of Image is required please"]
    },
    images:[{
        public_id:{
            type:String,
            required:[true, "Public ID is required please"]
        },
        image_url:{
            type:String,
            required:[true, "Image URL is required please"]
        }
    }],

});

module.exports = mongoose.model("Gallery",gallerySchema);