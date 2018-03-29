var expect = require('chai').expect;
var request = require('request');
var DatabaseConnection = require('../src/databaseConnection');

describe('DatabaseConnection', function() {
  var databaseConnection

  beforeEach(function() {
    databaseConnection = new DatabaseConnection();
  });

  describe('#setup', function() {

    it('Should setup the database', function() {

    });

  });

});
