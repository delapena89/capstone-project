var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
  sku: String,
  price: Number,
  loadCapacity: String,
  ballMaterial: String,
  housingMaterial: String,
  description: String,
  weight: Number,
  image1: String,
  image2: String
});

module.exports = mongoose.model('products', Product);
