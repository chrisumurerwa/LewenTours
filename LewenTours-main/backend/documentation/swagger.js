const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");

const { GalleryDocs} = require("./galleryDoc");

const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Lewen Tours Backend Documentation",
            version:"3.0.0"
        },
        tags:[
            {name:"Gallery",description:"Keps records of images and videos"}
        ],
        servers:[
            {url:"http://localhost:5000",description:"Local Server"},
            {url:"https://shopnet-api.onrender.com",description:"Production Server"}
        ],
        components:{
            securitySchemes:{
                token:{
                    type:"apiKey",
                    scheme:"bearer",
                    bearerFormat:"JWT",
                    name:"authorization",
                    in:"header"
                }
            }
        },
        paths:{...GalleryDocs}
    },
    apis:["../routers/*.js"]
}

const swaggerjsdocFunc= swaggerJsDoc(options);

exports.swaggerDocumentation = function(app){
    app.use(
      "/api/documentation",
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(swaggerjsdocFunc, {
        customSiteTitle: "Lewen Tours Backend Documentation",
        customfavIcon: "/api/static/Lewen-tours-logo.ico",
      })
    );
}

