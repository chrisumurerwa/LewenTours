const mongoose = require("mongoose");

const tipSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title is required Please"]
    },
    image:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: [true, "You can't leave this field empty"]
    }
});

module.exports = mongoose.model("Tips", tipSchema);