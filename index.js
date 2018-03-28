var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var bnb = require('./src/bnb');
var Property = require('./src/property');
var User = require('./src/user');

var app = express();

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Path for public file
app.use(express.static(path.join(__dirname, 'public')));
  console.log(User)
  var user = new User('Elon Musk');

  app.get('/', function(req, res){
    res.redirect('/property');
  });

  app.get('/property', function(req, res){
  res.render("index", {
    user: user
    });
  });

  app.get('/property/new', function(req, res){
  res.render("addProperty");
  });

  app.post('/property/new', function(req, res){
  user.list(new Property(req.body.name, req.body.dates, req.body.price, req.body.desc, req.body.photo))
    res.redirect('/property');
  });

  app.listen(3000, function() {
  console.log('Server Started on Port 3000...');
  });
