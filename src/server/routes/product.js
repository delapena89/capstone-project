var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {spread: true});
var Product = mongoose.model('products');

// post single product
router.post('/', function(req, res, next) {
  console.log(req.body);
  newProduct = new Product({
    sku: req.body.sku,
    price: req.body.price,
    loadCapacity: req.body.loadCapacity,
    ballMaterial: req.body.ballMaterial,
    housingMaterial: req.body.housingMaterial,
    description: req.body.description,
    images: req.body.photos,
  }).saveQ()
    .then(function(results) {
      console.log('success', results);
      res.json(results);
    }).catch(function(results) {
      console.log('error', results);
      res.json({'message': results});
    }).done;
});









module.exports = router;
