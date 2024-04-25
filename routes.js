//import des dependances
const express = require('express');
//le routeur est le composant qui va définir ce qu'on fait pour chaque chemin qu'on emprunte
//un GET sur http://localhost:3000/users
const router = express.Router();
const pokemonRoutes = require('./routes/pokemonRoutes');
const userRoutes = require('./routes/userRoutes'); // Import du composant userRoutes


//Message de bienvenue sur mon API sur localhost:3000/api
router.get('/', (req, res) => {
        res.send('Bienvenu a mon API');
})

//si l'utilisateur va sur localhost:3000/api/pokemons, on utilise pokemmonRoutes pour gérer les routes des pokemons
router.use('/pokemons', pokemonRoutes);
// si l'utilisateur va sur localhost:3000/api/users, on utilise userRoutes pour gérer les routes des utilisateurs
router.use('/users', userRoutes);


//importer pour pouvoir utiliser ailleurs en occurence dans index.js
module.exports=router;

//import des dépendances
//const express = require('express');
//le routeur est le composant qui va définir ce qu'on fait pour chaque chemin qu'on emprunte
//const router = express.Router();
//const userRoutes = require('./routes/userRoutes'); // Import du composant userRoutes

// Message de bienvenue sur mon API sur localhost:3000/api
//router.get('/', (req, res) => {
//    res.send('Bienvenue à mon API');
//});

// si l'utilisateur va sur localhost:3000/api/users, on utilise userRoutes pour gérer les routes des utilisateurs
//router.use('/users', userRoutes);

// importer pour pouvoir utiliser ailleurs en occurrence dans index.js
//module.exports = router;
