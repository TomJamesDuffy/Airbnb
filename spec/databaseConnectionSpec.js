describe('DatabaseConnection', function() {
  var databaseConnection

  beforeEach(function() {
    databaseConnection = new DatabaseConnection()
  })

  describe('It connects to the database', function() {
    databaseConnection.setup();
    var dbo;
    expect(dbo = db.db("mydb")).not.toThrowError
  })

})
