// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Rutas específicas primero
router.get('/:id', reservationController.getReservationById); // Obtener una reserva específica
router.put('/:id', reservationController.updateReservation);    // Actualizar una reserva específica
router.delete('/:id', reservationController.deleteReservation);  // Eliminar una reserva específica

// Luego la ruta general
router.get('/', reservationController.getAllReservations); // Obtener todas las reservas
router.post('/', reservationController.createReservation);   // Crear una nueva reserva

module.exports = router;
