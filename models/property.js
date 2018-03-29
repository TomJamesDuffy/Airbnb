var mongoose = require('mongoose');
var Schema = mongoose.Schema

const PropertySchema = mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
  dates: String,
  photo: String,
});

module.exports = mongoose.model("Property", PropertySchema);
