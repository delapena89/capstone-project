var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
  sku: String,
  price: Number,
  loadCapacity: String,
  ballMaterial: String,
  housingMaterial: String,
  description: String,
  images: {},
});

module.exports = mongoose.model('products', Product);
