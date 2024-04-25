const mongoose = require("mongoose");

// Définition du schéma pour un utilisateur
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Supprime les espaces en début et fin de chaîne
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Convertit l'email en minuscules
  },
  password: {
    type: String,
    required: true,
  },
  // Vous pouvez ajouter d'autres champs spécifiques à votre utilisateur ici
}, { timestamps: true }); // Ajoute automatiquement les timestamps createdAt et updatedAt

// Création du modèle Utilisateur à partir du schéma défini
const User = mongoose.model("User", userSchema);

// Exportation du modèle pour pouvoir l'utiliser dans d'autres fichiers
module.exports = User;
