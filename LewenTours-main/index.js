const http = require("http");
require("dotenv").config();

//            CONSTANTS
//---------------------------
const PORT = process.env.PORT;
const DOTENV = process.env.DOTENV;

const App  = require("./backend/app");
const server= http.createServer(App);

server.listen(PORT,console.log(`Server is listening at ${PORT} in ${DOTENV}`));