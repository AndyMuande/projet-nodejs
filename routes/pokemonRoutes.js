const express = require('express');
const router = express.Router();
const pokemonController = require ('../controllers/pokemonController');


//GET all pokemons
//localhost:3000/api/pokemons
router.get('/', pokemonController.getAllPokemons)
//GET ONE pokemon
//localhost:3000/api/pokemons/8776HJH
router.get('/:id', pokemonController.getOnePokemon)
//creer un nouveau Pokemon
router.post('/', pokemonController.createPokemon)
//Edit a pokemon
//router.put('/:id', (req, res) => {
    //res.send('Edit a Pokemon');
// Route pour mettre à jour un Pokemon
router.put('/:id', pokemonController.updatePokemon)
//Delete a pokemon
router.delete('/:id', pokemonController.deletePokemon)

//importer pour pouvoir utiliser ailleurs en occurence dans index.js
module.exports=router;