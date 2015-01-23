var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(require('./routes/todos'));

// Server
var server = app.listen(3000, function () {
	console.log('Listening on port 3000');
});