// routes/coworkingRoutes.js
const express = require('express');
const router = express.Router();
const {getCoworkingById,updateCoworking,deleteCoworking,getAllCoworkings,createCoworking} = require('../controllers/coworkingController');
const { isAdmin, isAuth} = require('../../middlewares/auth');

router.get('/:id', getCoworkingById); // Obtener un coworking específico
router.put('/:id', [isAuth, isAdmin],updateCoworking);   // Actualizar un coworking específico
router.delete('/:id',[isAuth, isAdmin], deleteCoworking); // Eliminar un coworking específico
router.get('/', getAllCoworkings); // Obtener todos los coworkings
router.post('/',[isAuth, isAdmin], createCoworking);   // Crear un nuevo coworking

module.exports = router;
