var express = require('express');
const router = express.Router();

const {
    list, 
    namePokemon 
} = require ('../controllers/pokemon.controller');

/**
 * Route to get de pokemons
 */
router.get('/', list);

/**
 * Route to get the name of the pokemon
 */
router.get('/poke', namePokemon);

module.exports = router;