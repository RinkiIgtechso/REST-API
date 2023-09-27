const swapperJSDoc = require("swagger-jsdoc");
const swaggerUi= require("swagger-ui-express");


const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : "Built rest api Node, Express and MongoDB",
            version: "1.0.0"
        },
        path:{

        },
        components:{
            securitySchemes:{
                bearerAuth:{
                    type: "http",
                    in: 'header',
                    name: 'Authorization',
                    description: 'Bearer token to access these api endpoints',
                    scheme: "bearer" 
                }
            }
        },
        security: [
            {
              bearerAuth: [],
            },
        ],
        servers: [
            {
                url:  "https://rest-api-testing-igtechso.onrender.com/"
            }
        ],
        tags:[
            {
                name: "User",
                description: "Everything about the user operation"
            },
            {
                name: "Events",
                description: "To get all the events."
            }
        ]
    },
    apis: ['./app.js']
};

const swaggerSpec = swapperJSDoc(options);

module.exports = swaggerSpec;