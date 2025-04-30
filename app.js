const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

const horaMiddleware = require('./middlewares/horaMiddleware'); 
const validarHora = require('./middlewares/validarHora');

app.use(horaMiddleware); 
app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



