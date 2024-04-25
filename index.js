const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

let app = express();
let port = 3000;
//message de bienvenue suur localhost: 3000
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Bienvenu a mon backend')
});
//les routes a utiliser sur localhost:3000
app.use('/api', routes);

//ici on va se connecter à la base de données

mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("connecté à la base de données");
    })
    .catch((err) => {
        console.log("Erreur de connexion", err);
    })


app.listen(port, () => {
    console.log ("serveur en ligne sur le port 3000");
});