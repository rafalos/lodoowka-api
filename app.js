var express = require('express');
const request = require('request');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var scraper = require('./scrapper/ing')
const mongoose = require('mongoose')
var userRouter = require("./routes/users")
var indexRouter = require('./routes/index');
var ingredientRouter = require('./routes/ingredient');
var categoryRouter = require('./routes/category');
var tagRouter = require('./routes/tag');
var recipeRouter = require('./routes/recipe');
var bodyParser = require('body-parser')
const history = require('connect-history-api-fallback');
var app = express();
var cron = require('node-cron');
var cors = require("cors")
app.use(history({
    index: '/'
  }));
cron.schedule('* * * * *', () => {
  request('http://loodowka-api.herokuapp.com/recipes', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("asked")
        }
    })
});
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
mongoose.connect('mongodb://rafalos:rafal1@ds115543.mlab.com:15543/lodoowka');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/tags', tagRouter);
app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);
app.use('/categories', categoryRouter);
module.exports = app;
