const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un seul utilisateur par son ID
exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json("User not found");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Créer un nouvel utilisateur
exports.register = async (req, res) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPwd,
      
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
    try {
      const user = await User.findOne({email: req.body.email})
      if (!user) return res.status(404).json('Invalid identifiers');
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(404).json('Invalid identifiers');
      const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
      res.header('auth-token', token).send(token);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Mettre à jour un utilisateur existant
exports.updateUser = async (req, res) => {
  try {
    const updateData = req.body;
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json("User not found");
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json("User not found");
    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//if (err) return res.sendStatus(401);
//if (err) return res.sendStatus(401);
//if (err) return res.sendStatus(401);
