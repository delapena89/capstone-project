var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('users');
var passport = require('passport');
var local = require('passport-local');

//user register function
router.post('/register/', function(req, res) {
  console.log(req.body);
  User.register(new User({username: req.body.username}), req.body.password, function(err, account) {
    if(err) {
      return res.status(500).json({err: err});
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
  console.log(req.session.user, "pre");
  req.logout();
  req.session.user = '';
  console.log(req.session.user, "post");
  res.status(200).json({status: "Logged out."});
});

module.exports = router;
