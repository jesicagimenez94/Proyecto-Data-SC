const transporter = require('../config/mailer');

class EmailService {
  static async sendContactEmail({ nombre, correo, mensaje }) {
    const mailOptions = {
      from: `"Formulario de Contacto" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${correo}\nMensaje: ${mensaje}`,
      replyTo: correo
    };
    
    return transporter.sendMail(mailOptions);
  }
}

module.exports = EmailService;