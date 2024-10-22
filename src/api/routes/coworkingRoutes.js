// routes/coworkingRoutes.js
const express = require('express');
const router = express.Router();
const coworkingController = require('../controllers/coworkingController');

// Rutas específicas primero
router.get('/:id', coworkingController.getCoworkingById); // Obtener un coworking específico
router.put('/:id', coworkingController.updateCoworking);   // Actualizar un coworking específico
router.delete('/:id', coworkingController.deleteCoworking); // Eliminar un coworking específico

// Luego la ruta general
router.get('/', coworkingController.getAllCoworkings); // Obtener todos los coworkings
router.post('/', coworkingController.createCoworking);   // Crear un nuevo coworking

module.exports = router;
