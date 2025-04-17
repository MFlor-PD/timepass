const express = require('express');
const app = express();

const INDEX = require('./routes/index');
const ENDROUTE = require('./routes/endpoint');

const horaMiddleware = require('./middleware/horaMiddleware'); 
const validarHora = require('./middleware/validarHora');

app.use('/', INDEX);
app.use('/endroute', ENDROUTE);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});