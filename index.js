//imports
const express = require('express')
const axios = require('axios')
const ejsLayouts = require('express-ejs-layouts')


//app setup
const app = express();
app.set ('view engine', 'ejs')


app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));



// 5 - Routes (controllers)


app.get('/', function(req, res) {
    var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/pikachu';
    // Use request to call the API
    axios.get(pokemonUrl).then( function(apiResponse) {
      var pokemon = apiResponse.data.results;
      res.render('index', { pokemon: pokemon });
    })
  });






// server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});