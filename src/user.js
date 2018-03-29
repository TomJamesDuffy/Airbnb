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

module.exports = User
