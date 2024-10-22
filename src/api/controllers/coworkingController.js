// controllers/coworkingController.js
const Coworking = require('../models/coworkingSpace');

// Obtener todos los coworkings
const getAllCoworkings = async (req, res) => {
    try {
        const coworkings = await Coworking.find();
        res.status(200).json(coworkings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un coworking por ID
const getCoworkingById = async (req, res) => {
    try {
        const coworking = await Coworking.findById(req.params.id);
        if (!coworking) return res.status(404).json({ message: 'Coworking not found' });
        res.status(200).json(coworking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo coworking
const createCoworking = async (req, res) => {
    const coworking = new Coworking(req.body);
    try {
        const savedCoworking = await coworking.save();
        res.status(201).json(savedCoworking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un coworking por ID
const updateCoworking = async (req, res) => {
    try {
        const updatedCoworking = await Coworking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCoworking) return res.status(404).json({ message: 'Coworking not found' });
        res.status(200).json(updatedCoworking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un coworking por ID
const deleteCoworking = async (req, res) => {
    try {
        const deletedCoworking = await Coworking.findByIdAndDelete(req.params.id);
        if (!deletedCoworking) return res.status(404).json({ message: 'Coworking not found' });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCoworkings,
    getCoworkingById,
    createCoworking,
    updateCoworking,
    deleteCoworking
}
