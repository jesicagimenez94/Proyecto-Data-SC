const { logger } = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  if (logger && typeof logger.error === 'function') {
    logger.error('Error en la aplicación:', {
      message: err.message,
      stack: err.stack,
      url: req.originalUrl,
      method: req.method,
      body: req.body
    });
  } else {
    console.error('Error en la aplicación (logger no disponible):', err);
  }

  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'development' ? err.message : 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;