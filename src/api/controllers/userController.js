const User = require('../models/user');
const { generateToken } = require("../../config/jwt");
const bcrypt = require('bcryptjs');



// Registrar usuario
const registerUser = async (req, res) => {
  const { userName, email, password, rol } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ userName, email, password, rol });
  res.status(201).json({ token: generateToken(user._id) });
};

// Login usuario
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ token: generateToken(user._id) });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Listar usuarios (solo admin)
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

module.exports = { registerUser, loginUser, getAllUsers };
