const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();
const cors = require('cors');

const path = require('path');
// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend Reto Final Etapa 1',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'https://reto-final-etapa-1-backend.herokuapp.com'
            }
        ]
    },
    apis: [`${path.join(__dirname, './Routes/*.js')}`]
}

// Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)))

app.get('/', (req, res) => {
    res.send('Hello World');
})

//Routes
app.use('/api/', require('./Routes/vehiculo'));
app.use('/api/', require('./Routes/linea'));
app.use('/api/', require('./Routes/marca'));
app.use('/api/', require('./Routes/consultUnica'));

// Monte de servidor
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});

