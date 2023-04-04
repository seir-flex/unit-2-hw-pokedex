const express = require('express');
const router = express.Router();
// Models - Database stuff
let pokes = require('../models/pokemon');


// INDEX
router.get('/', (req, res) => {
	res.render('pokemon/index.ejs');
});

// FORM TO CREATE A NEW POKEMON
router.get('/new', (req, res) => {
	res.render('pokemon/new.ejs', {poke: pokes[req.params.id]});
});

// POST
router.post('/', (req, res) => {
	console.log(req.body);
    pokes.push(req.body);
    res.redirect('/pokemon');
});


// SHOW
router.get('/:id', (req, res) => {
	res.render("./pokemon/show.ejs", { //second param must be an object 
		poke: pokes[req.params.id], pokeID: req.params.id });

});

// DELETE
router.delete('/:id', (req, res) => {
	console.log(req.params.id);
	pokes.splice(req.params.id, 1);
	console.log(pokes[0]);
	res.redirect('/pokemon');
});


module.exports = router;