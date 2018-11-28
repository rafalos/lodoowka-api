var express = require('express');
var router = express.Router();
var Ingredient= require("../models/ingredient")

router.get('/', function(req, res) {
    Ingredient.find({}, function(err, ingredients) {
      res.json({
        ingredients
      })
    })
  })

router.get('/:id', function(req, res) {
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
  
  router.put('/:id', function(req, res) {
    Ingredient.findByIdAndUpdate(req.params.id, req.body,{new: true}, function(err, ingredient) {
      if(err) {
        console.log(err)
      } else {
        ingredient.save()
        res.json({
          ingredient
        })
      }
    })
  })

module.exports = router;



