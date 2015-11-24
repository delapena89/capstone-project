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

// user logout

module.exports = router;
