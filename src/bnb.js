function Bnb() {
  this._users = [];

  Bnb.prototype.findUser = function(id){
    this._users.find(function(element) {
      return element._userID = id; 
    });
}

  Bnb.prototype.createUser = function(id){
    this._users.push(new User(id));
}
}
