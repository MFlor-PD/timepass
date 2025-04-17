const horaMiddleware = (req, res, next) => {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  req.hora = `${hora}:${minutos}:${segundos}`;
  next();
}
module.exports = horaMiddleware;