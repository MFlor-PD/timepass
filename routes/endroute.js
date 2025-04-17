const express = require('express');
const router = express.Router();    


router.get('/', (req, res) => {
    res.send('<h1>Ruta Final</h1><br><p>Bienvenido a la ruta final!</p></br><br><a href="/", INDEX>volver</a></br>');
});
module.exports = router;