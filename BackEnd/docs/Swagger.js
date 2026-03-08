const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API IoT",
            version: "1.0.0",
        },
    },
    apis: [path.resolve(__dirname, "../routes/*.js")]
    
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;