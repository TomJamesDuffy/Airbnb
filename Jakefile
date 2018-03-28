desc('This is the default task.');
task('build', function (params) {

  //Create Database
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/mydb";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });

  //Create Collection
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      var dbo = db.db("mydb");
      dbo.createCollection("properties", function(err, res) {
    if (err) throw err;
      console.log("Properties collection created!");
      db.close();
    });
  });
});

desc('This is the default task.');
task('delete', function (params) {

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

  //Delete property collection
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("properties").drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Property collection deleted");
    db.close();
  });
});

});

