const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

app.use(express.static('public'))
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title:'Ecommerce',
            description: "Customer API information",
            contact: {
                name: "Mexican Tech"
            },
            servers: ["http://localhost:3000"]
        }
    },
    //['.routes/*.js]
    apis: ["swagger.js"]
}; 

const swaggerDocs =swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.listen(process.env.PORT || 3000, () => console.log("Listen on port 3000"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/user', require('./routes/user.routes'))