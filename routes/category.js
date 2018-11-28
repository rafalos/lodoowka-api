var express = require('express');
var router = express.Router();
var Category = require("../models/category")

router.get('/', function(req, res, next) {
    Category.find({}, function(err, categories) {
        if(err) {
            console.log(err)
        } else {
            res.json({
                categories
            })
        }
    })   
});

router.post('/', function(req,res) {
    Category.create(req.body, (err, category) => {
      if(err) {
        console.log(err)
      } else {
        Category.find({}, (err, categories) => {
          if(err) {
            console.log(err)
          } else {
            res.json({
              categories
            })
          }
        })      
      }
    })
  })
  

module.exports = router;
