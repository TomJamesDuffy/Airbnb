var expect = require('chai').expect;
var request = require('request');
var Property = require('../src/property');

describe('Property', function() {
  var property

  beforeEach(function() {
    property = new Property('Mars', 'Very nice', '3000', 'Jan',
     'https://image.ibb.co/mUUvX7/Space_House_by_night_node_full_image_2.jpg');
  });

  describe('#getDetails', function() {

    it('Should have a name', function() {
      expect(property.getDetails().name).to.equal('Mars')
    });

    it('Should have a description', function() {
      expect(property.getDetails().desc).to.equal('Very nice')
    });

    it('Should return a price', function() {
      expect(property.getDetails().price).to.equal('3000')
    });

    it('Should return a date', function() {
      expect(property.getDetails().dates).to.equal('Jan')
    });

    it('Should return a photo', function() {
      expect(property.getDetails().photo).to.equal(
        'https://image.ibb.co/mUUvX7/Space_House_by_night_node_full_image_2.jpg')
    });

  });

});
