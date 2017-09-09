// requires
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index'); // for base route

// globals
var app = express();
var port = 3000;

//use
app.use(bodyParser.urlencoded({ extended: true })); // middleware
app.use(express.static('public')); // sets source folder for client side

// routes
app.use('/', indexRouter);

//listen
app.listen(port, function () {
    console.log('listening on', port);
}); // end listen
