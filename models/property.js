var mongoose = require('mongoose');
var Schema = mongoose.Schema

const PropertySchema = mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
  dates: String,
  photo: Date,
});

module.exports = mongoose.model("Property", PropertySchema);
