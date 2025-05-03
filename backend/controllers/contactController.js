const EmailService = require('../services/emailService');
const logger = require('../utils/logger');

const contactController = {
  submitForm: async (req, res) => {
    try {
      const { nombre, correo, mensaje, terminos } = req.body;
      
      if (!nombre || !correo || !mensaje || !terminos) {
        return res.status(400).json({
          success: false,
          message: 'Todos los campos son obligatorios',
          missingFields: {
            nombre: !nombre,
            correo: !correo,
            mensaje: !mensaje,
            terminos: !terminos
          }
        });
      }

      await EmailService.sendContactEmail({ nombre, correo, mensaje });
      
      return res.status(200).json({
        success: true,
        message: 'Mensaje recibido correctamente',
        data: {
          nombre,
          correo,
          fecha: new Date().toISOString()
        }
      });

    } catch (error) {
      logger.error(`Error en submitForm: ${error.message}`);
      
      return res.status(500).json({
        success: false,
        message: 'Error al procesar tu solicitud',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
};

module.exports = contactController;