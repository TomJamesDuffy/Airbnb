var DatabaseConnection = require('./databaseConnection');

function User(id){
  this._propertyList = [];
  this._userID = id
  this._db = new DatabaseConnection()
}

User.prototype.list = function(property){
  this._propertyList.push(property);
}

User.prototype.createProperty = function(name, desc, price, dates, link){
  this._db.add(name, desc, price, dates, link);
}

module.exports = User
