var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {spread: true});
var Product = mongoose.model('products');
var User = mongoose.model('users');
var key = require('../../../_config').stripe;
var stripe = require('stripe')(key);


router.post('/checkout', function(req, res, next) {
  console.log(req.body);
    var card = {
    'number': req.body.customer.card.number,
    'exp_month': req.body.customer.card.month,
    'exp_year': req.body.customer.card.year,
    'cvc': req.body.customer.card.cvc
  };
//create tok method
stripe.tokens.create({
  card: card
}, function(err, token) {
  //charge method
  console.log(token);
  stripe.charges.create({
  amount: 1000,
  currency: "usd",
  source: token.id, // obtained with Stripe.js
  description: "Charge for test@example.com"
}, function(err, charge) {
  if(err){
    console.log(err);
    res.json(err);
  } else {
    // console.log(charge);
    var userID = req.body.user;
    var productArray = req.body.products;
    console.log(productArray);
    var update = {$push : {orders : {$each: productArray}}};
    // console.log(req.body);
    var options = {new: true, upsert: true};
    User.findByIdAndUpdateQ(userID, update, options)
    .then(function(user){
      res.json({user: user, charge: charge});
    }).catch(function(err){
      res.json(err);
    });

  }
});
});



});

// function addProducts(productArray, userOrders) {
//   for (var i = 0; i < productArray.length; i++) {
//     userOrders.push(productArray[i]);
//   }
// }

// post single product
router.post('/', function(req, res, next) {
  newProduct = new Product({
    type: req.body.type,
    sku: req.body.sku,
    price: req.body.price,
    loadCapacity: req.body.loadCapacity,
    ballMaterial: req.body.ballMaterial,
    housingMaterial: req.body.housingMaterial,
    description: req.body.description,
    weight: req.body.weight,
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
router.get('/products', function(req,res,next) {
  Product.findQ()
  .then(function(results) {
res.json(results);
  }).catch(function(results) {
    res.json({'message': results});
  }).done();
});

// get single product
router.get('/products/:id', function(req, res, next) {
  console.log(req.params.id);
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

// // delete single product
router.delete('/:id', function(req, res, next) {
  Product.findByIdAndRemoveQ(req.params.id)
  .then(function(response) {
    res.json(response);
  }).catch(function(response) {
    res.json({'message': response});
  }).done();
});









module.exports = router;
