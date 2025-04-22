require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { expressLogger } = require('./utils/logger');
const errorHandler = require('./middlewares/errorHandler');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(expressLogger);

app.use('/api/contact', contactRoutes);
app.use((err, req, res, next) => {
    console.error('Error no manejado:', err);
    res.status(500).json({ success: false, message: 'Error interno' });
  });

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});