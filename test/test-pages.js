var expect = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
  describe('Main page', function() {

    it('Should show Welcome to Nebula on the homepage', function(done) {
      request('http://localhost:3000/', function (error, response, body) {
        expect(body).to.include('Welcome to Nebula');
        done();
      })
    })

    it('Status', function(done) {
      request('http://localhost:3000/', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  })

  describe('Properties/new page', function() {

    it('Should show Welcome to Nebula and the form', function(done) {
      request('http://localhost:3000/property/new', function (error, response, body) {
        expect(body).to.include('Welcome to Nebula');
        expect(body).to.include('Name');
        expect(body).to.include('Dates');
        expect(body).to.include('Price');
        expect(body).to.include('Description');
        expect(body).to.include('Photo');
        done();
      })
    })

    it('Status', function(done) {
      request('http://localhost:3000/', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  })

})
