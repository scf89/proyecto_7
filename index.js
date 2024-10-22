require('dotenv').config();
const express = require('express');
const userRoutes = require('./src/api/routes/userRoutes');
const coworkingRoutes = require('./src/api/routes/coworkingRoutes');
const reservationRoutes = require('./src/api/routes/reservationRoutes');
const cors = require("cors");
const { connectDB } = require("./src/config/db");

const app = express();
app.use(express.json());

app.use(cors());

connectDB();

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/coworking', coworkingRoutes);
app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
