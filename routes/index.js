const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>BIENVENIDO</h1>
    <p>La hora actual es: ${req.hora}</p>
    <p>${req.query.mensaje || ''}</p>
    <a href="/endroute"><button>ENTRAR</button></a>`);
})

module.exports = router;