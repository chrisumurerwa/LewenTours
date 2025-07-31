const express = require("express");
const { upload } = require("../middlewares/multer_images");
const { createGallery } = require("../controllers/gallery");

const router = express.Router();

router.route("/").post(upload.array("images",30), createGallery);

module.exports = router;