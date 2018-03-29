function DatabaseConnection() {
  this._url = 1;
  this._MongoClient = 2;
  this.setup()
}

DatabaseConnection.prototype.setup = function() {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  this._url = url;
  this._MongoClient = MongoClient;
  this._res = [];

}

DatabaseConnection.prototype.add = function(name, desc, price, dates, link) {
  this._MongoClient.connect(this._url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: name, desc: desc, price: price, dates: dates, photo: link };
    dbo.collection("properties").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 row inserted");
    db.close();
    });
  });
}

module.exports = DatabaseConnection
