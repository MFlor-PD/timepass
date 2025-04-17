const validarHora = (req, res, next) => {
    const horaActual = new Date().getHours();
    const horaLimite1 = 12;
    const horaLimite2 = 24;


    if (horaActual >= horaLimite1 && horaActual <= horaLimite2) {
        next();
    } else {
        res.status(400).send('Aún no son las 12:00 de la maniana, espera para entrar'); 
    }
}
module.exports = validarHora;