function User(id){
  this._propertyList = [];
  this._userID = id
}

User.prototype.list = function(property){
  this._propertyList.push(property);
}

User.prototype.availableProperties = function(){
  return this._propertyList;
}

User.prototype.createProperty = function(name, desc, price, dates){
  return new Property(name, desc, price, dates);
}

module.exports = User
