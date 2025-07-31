const express = require("express");
const app = express();
const gallery = require("./routers/gallery");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDatabase = require("./config/database");
const path = require("path");
const { swaggerDocumentation } = require("./documentation/swagger");

// Middle wares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/static",express.static(path.join(__dirname,"static")));
app.use(morgan("dev"));

// Routers
app.use("/api/v1/gallery",gallery);
swaggerDocumentation(app)

connectDatabase();



module.exports = app;