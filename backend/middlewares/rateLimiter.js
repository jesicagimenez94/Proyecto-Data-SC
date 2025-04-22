const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: 'Demasiadas solicitudes desde esta IP. Intenta nuevamente más tarde.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = limiter;