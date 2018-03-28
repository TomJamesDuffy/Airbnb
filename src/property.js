function Property(name,desc,price,dates,photo){
  this._details = {};
  this._details["name"]=name
  this._details["desc"]=desc
  this._details["price"]=price
  this._details["dates"]=dates
  this._details["photo"]=photo
}

Property.prototype.getDetails = function(){
  return this._details;
}

module.exports = Property
