var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

//var port = 8080;
var db = 'mongodb://localhost/search-app';

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 8080, process.env.IP, console.log('app is running'));
