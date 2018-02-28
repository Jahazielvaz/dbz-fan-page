var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var urlEncoded = bodyParser.urlencoded({extended: false});

const routes = require('./server/routes/routes.js');

var app = express();
app.use('/', express.static('static'));
app.set('view engine', 'ejs');
app.use(urlEncoded);

app.get('/', routes);
app.get('/comments', routes);
app.post('/', routes);















module.exports = app;
