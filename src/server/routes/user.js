var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('users');
var Product = mongoose.model('products');
var passport = require('passport');
var local = require('passport-local');

//user register function
router.post('/register', function(req, res) {
  var user = new User({name: req.body.name, email: req.body.email, username: req.body.username});
  User.register(user, req.body.password, function(err, account) {
    if(err) {
      res.status(500).json({err: err});
    }
    else {
      res.status(200).json({account: account});
    }
  });
});

// admin login

// admin logout

// user login
router.post('/login', function(req,res,next){
  passport.authenticate('local', function(err, user, info){
    if (err){
      return res.status(500).json({
        err:err
      });
    }
    if (!user) {
      console.log(info);
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err){
      if (err) {
        return res.status(500).json({
          err:'Error log in'
        });
      }
      req.session.user = user;
      res.status(200).json({
        status:'Login successful!',
        user: user
      });
    });
  })(req, res, next);
});

// user logout
router.get('/logout', function(req, res) {
  console.log(req.session.user, 'pre-logout');
  req.logout();
  req.session.user = '';
  console.log(req.session.user, 'post-logout');
  res.status(200).json({status: "Logged out"});
});


// checks unique user username
router.get('/findByUsername/:username', function(req, res, next) {
  User.findOne({ username: req.params.username }, function (err, doc) {
    // if ( doc ) {
    //   res.send(true);
    // } else {
    //   res.send(false);
    // }

    doc ? res.send(true) : res.send(false);

  });
});

// checks unique user email
router.get('/findByEmail/:email', function(req, res, next) {
  User.findOne({ email: req.params.email }, function (err, doc) {
    // if ( doc ) {
    //   res.send(true);
    // } else {
    //   res.send(false);
    // }

    doc ? res.send(true) : res.send(false);

  });
});

// get order histories from customers
router.get('/order-history/:id', function(req, res, next) {
  User.findById(req.params.id)
  .populate('orders')
  .exec(function(err,user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user.orders);
    }
  });
});






module.exports = router;
