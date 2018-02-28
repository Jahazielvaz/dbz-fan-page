const express = require('express');
const router = express.Router();
const models = require('../models/favchar-model.js');
const loginmodel = require('../models/login.js');




router.get('/', function(req, res){
  console.log(`Request has been made: ${req.url}`);
  res.render('main', {users: req.query});
})

router.get('/comments', function(req, res){
  console.log(`Request has been made: ${req.url}`);
  res.render('comments.ejs', {users: req.query});
})


router.post('/', function(req, res){
  models.create({
    favchar: req.body.favchar,
    why: req.body.why
  })
  res.render('comments.ejs', {users: req.query});
})

router.post('/', function(req, res){
  loginmodel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  res.render('comments.ejs');
})

module.exports = router;
