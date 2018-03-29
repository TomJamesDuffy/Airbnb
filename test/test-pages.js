var expect = require('chai').expect;
var request = require('request');
const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('Goes to signup page', function() {

    before(function(done) {
      browser
        .pressButton('Add Property', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });

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

  });

});

describe('User uses signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/property/new', done);
  });

  describe('submits form', function() {

    before(function(done) {
      browser
        .fill('name', 'Space House')
        .fill('dates', 'Jan')
        .fill('price', '3000')
        .fill('desc', 'wow')
        .fill('photo', 'https://image.ibb.co/mUUvX7/Space_House_by_night_node_full_image_2.jpg')
        .pressButton('Submit', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see welcome page', function() {
      browser.assert.text('h1', 'Welcome to Nebula');
    });

    it('Should show the name of the house on the homepage', function(done) {
      request('http://localhost:3000/', function (error, response, body) {
        expect(body).to.include('Space House');
        done();
      })
    })

    it('Should show the date on the homepage', function(done) {
      request('http://localhost:3000/', function (error, response, body) {
        expect(body).to.include('Jan');
        done();
      })
    })

    it('Should show the price on the homepage', function(done) {
      request('http://localhost:3000/', function (error, response, body) {
        expect(body).to.include('3000');
        done();
      })
    })

    it('Should show the description on the homepage', function(done) {
      request('http://localhost:3000/', function (error, response, body) {
        expect(body).to.include('wow');
        done();
      })
    })
  });
});
