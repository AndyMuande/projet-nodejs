const Pokemon = require("../models/pokemonModel");

exports.getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOnePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(404).json("Pokemon not found");
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPokemon = async (req, res) => {
try {
  const newPokemon = new Pokemon({
    name: req.body.name,
    hp: req.body.hp,
    cp: req.body.cp,
    picture: req.body.picture,
    types: req.body.types,
  });
  const savedPokemon = await newPokemon.save();
  res.status(201).json(savedPokemon);
} catch (error) {
  res.status(400).json({ message: error.message });
}
};

exports.updatePokemon = async (req, res) => {
    try {
      const updatedPokemon = await Pokemon.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedPokemon) return res.status(404).json("Pokemon not found");
      res.status(200).json(updatedPokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.deletePokemon = async (req, res) => {
    try {
      const deletedPokemon = await Pokemon.findByIdAndDelete(req.params.id);
      if (!deletedPokemon) return res.status(404).json("Pokemon not found");
      res.status(200).json({ message: "Pokemon deleted successfully", deletedPokemon });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
