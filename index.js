var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next) {
console.log('Logging...');
  next();
}
logger needs to go before the app.use(logger)

app.use(logger);
*/

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*
var person = [{
  name:'Jeff', 
  age: 30
},
{
  name:'Jeff',
  age: 30
}
]
*/
// Set Static Path for public file
app.use(express.static(path.join(__dirname, 'public')));


var users = [
{
  first_name:'John',
  last_name: 'Doe',
  place: 'Manhattan'
},
{
  first_name:'John',
  last_name: 'Doe',
  place: 'New York'
}

]

  app.get('/', function(req, res){
  //res.json(person);
  res.render("index", { 
    title: 'Properties',
    users: users
    });
  });

  app.post('/users/add', function(req, res) {
    console.log(req.body.first_name);
  });

  app.listen(3000, function() {
  console.log('Server Started on Port 3000...');
  });







