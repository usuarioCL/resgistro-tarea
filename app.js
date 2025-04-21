const express = require('express');
const path = require('path');
const router = require('./router');
const app = express();

// Configuración del puerto
const PORT = 3000;

// Configuración de vistas y motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para manejar datos del formulario
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos (Bootstrap y CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', router);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});