const express = require('express');
const router = express.Router();
const crudController = require('./controllers/crud');

// Rutas del CRUD
router.get('/', crudController.listarTareas);
router.get('/create', crudController.mostrarFormularioCrear);
router.post('/create', crudController.crearTarea);
router.get('/edit/:id', crudController.mostrarFormularioEditar);
router.post('/edit/:id', crudController.editarTarea);
router.get('/delete/:id', crudController.eliminarTarea);

module.exports = router;