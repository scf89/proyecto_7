const express = require('express');
const { registerUser, loginUser, getAllUsers } = require('../controllers/userController');
const { isAdmin} = require('../../middlewares/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', [isAdmin], getAllUsers); // Solo admin puede listar usuarios

module.exports = router;
