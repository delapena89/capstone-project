var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {spread: true});
var Product = mongoose.model('products');

// post single product
router.post('/', function(req, res, next) {
  newProduct = new Product({
    sku: req.body.sku,
    price: req.body.price,
    loadCapacity: req.body.loadCapacity,
    ballMaterial: req.body.ballMaterial,
    housingMaterial: req.body.housingMaterial,
    description: req.body.description,
    image1: req.body.image1,
    image2: req.body.image2
  }).saveQ()
    .then(function(results) {
      res.json(results);
    }).catch(function(results) {
      res.json({'message': results});
    }).done;
});

// get all products
router.get('/', function(req,res,next) {
  Product.findQ()
  .then(function(results) {
res.json(results);
  }).catch(function(results) {
    res.json({'message': results});
  }).done();
});

// get single product
router.get('/:id', function(req, res, next) {
  Product.findByIdQ(req.params.id)
  .then(function(response) {
    res.json(response);
  }).catch(function(response){
    res.json({'message': response});
  }).done();
});

// put single product
router.put('/:id', function(req, res, next) {
  var update = {
    sku: req.body.sku,
    price: req.body.price,
    loadCapacity: req.body.loadCapacity,
    ballMaterial: req.body.ballMaterial,
    housingMaterial: req.body.housingMaterial,
    description: req.body.description,
    image1: req.body.image1,
    image2: req.body.image2
  };
  var options = {
    new: true,
  };
  Product.findByIdAndUpdateQ(req.params.id, update, options)
  .then(function(response) {
    res.json(response);
  }).catch(function(response) {
    res.json({'message': response});
  }).done();
});









module.exports = router;
