const express = require('express');
const PORT = 4000;
const methodOverride = require("method-override");

// Express
const app = express();

// Controller
const pokemonController = require('./controllers/pokemon');

// Models - Database stuff
const models = require('./models/pokemon');
const pokes = models.pokemon;

// Middleware 
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true})); // without urlencoded we get req.body undefined
app.use(express.json()); // parse JSON data in the request body
app.use(methodOverride("_method")); // override a forms POST method to act as a DELETE or an UPDATE


// default route
app.get('/', (req, res) => {
    res.send('default route')
})

// Pokemon Routes
app.use('/pokemon', pokemonController);

// 404
app.get('/*', (req, res) => {
    res.render("404.ejs")
})

// Listen
app.listen(PORT, () => {
    console.log(`🥔 Server is listening to PORT ${PORT}`)
})