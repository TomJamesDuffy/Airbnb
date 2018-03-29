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

    it('should have Nebula Digital', function() {
      browser.assert.text('h1', 'Add a property to host')
    })

    it('has a form to enter room details', function() {
      browser.assert.elements('form');
      browser.assert.element('form input[name=name]');
      browser.assert.element('form input[name=dates]');
      browser.assert.element('form input[name=price]');
      browser.assert.element('form textarea[name=desc]');
      browser.assert.element('form input[name=photo]');
    });

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

    it('Should show the price on the homepage', function(done) {
      request('http://localhost:3000/', function (error, response, body) {
        expect(body).to.include('Space House, Jan, 3000, wow');
        done();
      })
    })
  });
});
