const mongoose = require("mongoose");
const connectDatabase = ()=>{
    mongoose.set("strictQuery",false);
    
    mongoose
    .connect(process.env.DB_URL||"mongodb://localhost:27017/lewentours", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((connection) => {
        console.log(
        "Connected to DB with " + connection.connection.host + ":" + connection.connection.port
        );
    })
    .catch((error) => {
        console.log(error);
    });
}
// VPN had restricted connections to database
module.exports = connectDatabase;