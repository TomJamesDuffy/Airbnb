function DatabaseConnection() {

}

DatabaseConnection.prototype.connect = function() {
  var pg = require('pg');

  var connectionString = "postgres://whjcduklxhnlxd:ac0a1599dfd175ccc2ea6f94c3449e0c705ea76f347d7e74308af6495403ebb9@ec2-54-195-246-59.eu-west-1.compute.amazonaws.com:5432/d1nqd7lkeuvchb";

  var pgClient = new pg.Client(connectionString);

  pgClient.connect();

  var query = pgClient.query("SELECT * from properties");

  console.log(query)
}

DatabaseConnection.prototype.print = function() {

}
