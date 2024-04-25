const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

// Route pour récupérer tous les utilisateurs
router.get('/', userController.getAllUsers);

// Route pour récupérer un seul utilisateur par son ID
router.get('/:id', userController.getOneUser);

// Route pour créer un nouvel utilisateur sur localhost:3000/api/users
router.post('/', userController.register);

// Route pour mettre à jour un utilisateur existant
router.put('/:id', userController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/:id', userController.deleteUser);

// Exporter le router pour pouvoir l'utiliser dans d'autres fichiers, notamment dans index.js
module.exports = router;
