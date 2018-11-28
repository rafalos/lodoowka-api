var express = require('express');
var router = express.Router();
var Recipe = require("../models/recipe")

router.get('/', function(req, res) {
    Recipe.find({}, function(err, recipes) {
      if(err) {
        console.log(err)
      } else {
        res.json({
          recipes
        })
      }
    })
  })
  
  router.get('/:category', function(req,res){
    Recipe.find({
      category: req.params.category
    }, function(err, recipes) {
      if(err) {
        console.log(err)
      } else {
        res.json({
          recipes
        })
      }
    })
  })
  
  router.post('/', function(req, res) {
    Recipe.create(req.body, function(err, recipe) {
      if(err) {
        console.log(err)
      } else {
        Recipe.find({}, function(err, recipes) {
          if(err) {
            console.log(err)
          } else {
            res.json({
              recipes
            })
          }
        })
      }
    })
  })
module.exports = router;
