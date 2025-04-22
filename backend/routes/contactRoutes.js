const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contactController');
const rateLimiter = require('../middlewares/rateLimiter');
const validate = require('../middlewares/validators');

router.post(
  '/submit',
  rateLimiter,
  [
    body('nombre').trim().notEmpty().withMessage('Nombre es requerido'),
    body('correo').trim().isEmail().withMessage('Correo inválido'),
    body('mensaje').trim().notEmpty().withMessage('Mensaje es requerido'),
    body('terminos').isBoolean().withMessage('Debes aceptar los términos')
  ],
  validate,
  contactController.submitForm
);

module.exports = router;