const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

const horaMiddleware = require('./middlewares/horaMiddleware'); 
const validarHora = require('./middlewares/validarHora');

app.use(horaMiddleware); 
app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



