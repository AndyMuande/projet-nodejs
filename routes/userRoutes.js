const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const userController = require ('../controllers/userController');

// Route pour récupérer tous les utilisateurs
router.get('/', verifyToken, userController.getAllUsers);

// Route pour récupérer un seul utilisateur par son ID
router.get('/:id', userController.getOneUser);

// Route pour créer un nouvel utilisateur sur localhost:3000/api/users
router.post('/', userController.register);
// Login a user
// POST sur localhost:3000/api/users/login
router.post('/login', userController.login);

// Route pour mettre à jour un utilisateur existant
router.put('/:id', userController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/:id', userController.deleteUser);

// Exporter le router pour pouvoir l'utiliser dans d'autres fichiers, notamment dans index.js
module.exports = router;
//if (err) return res.sendStatus(401);
//if (err) return res.sendStatus(401);
//if (err) return res.sendStatus(401);
//if (err) return res.sendStatus(401);
