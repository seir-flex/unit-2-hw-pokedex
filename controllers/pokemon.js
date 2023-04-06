const express = require('express');
const router = express.Router();
// Models - Database stuff
const pokes = require('../models/pokemon');


// INDEX
router.get('/', (req, res) => {
	res.render('pokemon/index.ejs');
});

// FORM TO CREATE A NEW POKEMON
router.get('/new', (req, res) => {
	res.render('pokemon/new.ejs', {poke: pokes[req.params.id]});
});

// FORM TO EDIT A POKEMON
router.get('/:id/edit', (req, res) => {
	res.render('pokemon/edit.ejs', {poke: pokes[req.params.id], pokeID: req.params.id});
});

// POST - adds new pokemon to array
router.post('/', (req, res) => {
    pokes.push(req.body); // adds new to pokes array
    res.redirect('/pokemon'); // go to home page
});

// SHOW - shows a single pokemon
router.get('/:id', (req, res) => {
	res.render("./pokemon/show.ejs", { //second param must be an object 
		poke: pokes[req.params.id], pokeID: req.params.id }); //define pokemon - pokes[req.params.id] (ex: name, img, stats, etc.) - and index - req.params.id (ex: 0)

});

// DELETE - deletes a pokemon
router.delete('/:id', (req, res) => {
	pokes.splice(req.params.id, 1); // remove pokes[req.params.id]
	res.redirect('/pokemon'); // go back to index
});

// UPDATE - updates a pokemon
router.put('/:id', (req, res) => {
	ogPoke = pokes[req.params.id]; // define original pokemon
	if (req.body.name != '') { // if form is not blank
		ogPoke.name = req.body.name;}; // change original name to new name
	if (req.body.image != '') { 
		ogPoke.img = req.body.image;}
	res.redirect('/pokemon'); // go back to index
});

module.exports = router;