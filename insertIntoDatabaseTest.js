var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Mars", desc: "red", price: "45 trillion", dates: "Free all year round" };
  dbo.collection("properties").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 row inserted");
    db.close();
  });
});
