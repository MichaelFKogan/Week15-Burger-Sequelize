var models  = require('../models');
var express = require('express');
var router = express.Router();
var app = express();

// ROUTING
//==========================================================

// SELECT * FROM burgers; Print to index.handlebars
router.get('/', function(req, res) {

    models.burgersequelizedb.findAll({attributes: ['id', 'burgerName', 'devoured']}).then(function(result){
    
  dataOne = [];
  dataTwo =[];
    
    for(var i=0;i<result.length;i++){
      if(result[i].devoured == false){
        dataOne.push({id: result[i].id, burgerName: result[i].burgerName});
      }
      else if(result[i].devoured == true){
        dataTwo.push({id: result[i].id, burgerName: result[i].burgerName});
      }
    }

    res.render('index', {placeholder : dataOne, placeholderTwo : dataTwo});
    });
});

// POST POST POST POST
router.post('/create', function (req, res) {

  models.burgersequelizedb.create({
    burgerName: req.body.burgerInput,
    devoured: req.body.boolean,
  })
    res.redirect('/');
});



// UPDATE UPDATE UPDATE UPDATE
router.put('/update', function(req,res){
// connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [ req.body.boolean, req.body.id], function(err, result) {

models.burgersequelizedb.update({devoured: true}, {where: {id: req.body.id}});

      res.redirect('/');
    });


// DELETE DELETE DELETE DELETE
router.delete('/delete', function(req,res){
// connection.query('DELETE FROM burgers WHERE id = ?', [req.body.id], function(err, result) {

models.burgersequelizedb.destroy({where: {id: req.body.id}});
      res.redirect('/');

});


module.exports = router;