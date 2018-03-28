var expect = require('chai').expect;
var request = require('request');
var User = require('../src/user');

describe('User', function() {
  var user

  beforeEach(function() {
    user = new User(1);
  });

  describe('#_userID', function() {

    it('Should have an ID', function() {
      expect(user._userID).to.equal(1)
    });

  });

  describe('#list', function() {

    it('Should be able to push to _propertyList', function() {
      user.list('Miami')
      expect(user._propertyList).to.include('Miami')
      expect(user._propertyList).to.have.length(1)
    });

  });

  describe('#availableProperties', function() {

    it('Should return _propertyList', function() {
      user.list('Miami')
      expect(user.availableProperties()).to.include('Miami')
      expect(user.availableProperties()).to.equal(user._propertyList)
    });

  });

});
