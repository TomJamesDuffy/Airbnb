function Property(name,desc,price,dates){
  this._details = {};
  this._details["name"]=name
  this._details["desc"]=desc
  this._details["price"]=price
  this._details["dates"]=dates
}

Property.prototype.getDetails = function(){
  return this._details;
}


