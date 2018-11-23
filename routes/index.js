var express = require('express');
var router = express.Router();
var Ingredient = require("../models/ingredient")

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ingredient/:id', function(req, res) {
  Ingredient.findById(req.params.id, function(err, ingredient) {
    if(err) {
      console.log(err)
    } else {
      res.json({
        ingredient
      })
    }
  })
})

router.get('/ingredients', function(req, res) {
  Ingredient.find({}, function(err, ingredients) {
    res.json({
      ingredients
    })
  })
})

module.exports = router;
