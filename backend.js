var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var urlEncoded = bodyParser.urlencoded({extended: false});

var app = express();
app.use('/', express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  console.log(`Request has been made: ${req.url}`);
  res.render('main', {users: req.query});
})

app.get('/comments', function(req, res){
  console.log(`Request has been made: ${req.url}`);
  res.render('comments.ejs');
})

app.listen(3000, function(){
  console.log('Now listening to port 3000');
})

app.post('/', urlEncoded, function(req, res){
  console.log(req.body);
  res.render('comments', {users: req.query});
})
