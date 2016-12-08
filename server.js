// NPM MODULES
//==========================================================

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// ROUTES
//==========================================================
var burger_Controller = require('./controllers/burgerController');
app.use('/', burger_Controller);
app.use('/create', burger_Controller);




//EXPRESS LISTENER 
//===============================================================
var PORT = process.env.PORT || 3000;

app.listen(PORT, function (){
   console.log('App Listening: PORT ' + PORT);
});



// SEQUELIZE CREATE
//==========================================================

var models = require ('./models');

// TODO: Sync our models

// SOLUTION: Sync our models
models.sequelize.sync({force:true}) // {force:true} drops the table everytime the server starts.


// TODO: attach .then to the sync
//       and Create our Manager in the callback
// ================================================

.then(function (){
	return models.burgersequelizedb.create({
	burgerName: "Whopper",
   devoured: 0
	})
})

.then(function (){
	return models.burgersequelizedb.create({
	burgerName: "McBurger Delicious",
   devoured: 0
	})
})

.then(function (){
	return models.burgersequelizedb.create({
	burgerName: "Supreme Burger",
   devoured: 0
	})
})









