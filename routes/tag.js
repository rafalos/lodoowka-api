var express = require('express');
var router = express.Router();
var Tag = require("../models/tag")

router.get('/', function(req, res) {
  Tag.find({}, (err, tags) => {
    if(err) {
      console.log(err)
    } else {
      res.json({
        tags
      })
    }
  })
})

router.post('/', function(req,res) {
  Tag.create(req.body, (err, tag) => {
    if(err) {
      console.log(err)
    } else {
      Tag.find({}, (err, tags) => {
        if(err) {
          console.log(err)
        } else {
          res.json({
            tags
          })
        }
      })      
    }
  })
})

module.exports = router;
