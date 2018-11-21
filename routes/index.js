var express = require('express');
var router = express.Router();
var Ingredient = require("../models/ingredient")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ingredients', function(req, res) {
  Ingredient.find({}, function(err, ingredients) {
    res.json({
      ingredients
    })
  })
})

module.exports = router;
