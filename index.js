var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Property = require('./src/property');
var User = require('./src/user');
var DatabaseConnection = require('./src/databaseConnection');
var mongoose = require('mongoose');

var Property = require('./models/property');
mongoose.connect('mongodb://localhost/mydb');

var app = express();
app.use(express.static('/public'));

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Path for public file
app.use(express.static(path.join(__dirname, 'public')));
  var user = new User('Elon Musk');

  app.get('/', function(req, res){
    res.redirect('/property');
  });

  app.get('/property', function(req, res){
    console.log(Property)
    Property.find({}, function(err, propAll) {
    console.log(propAll);
    if (err) throw err;
    res.render('index', {
      'propAll': propAll
    });
  });
});

  app.get('/property/new', function(req, res){
  res.render("addProperty");
  });

  app.post('/property/new', function(req, res){
  user.createProperty(req.body.name, req.body.dates, req.body.price, req.body.desc, req.body.photo)
    res.redirect('/property');
  });

  app.listen(3000, function() {
  console.log('Server Started on Port 3000...');
  });
