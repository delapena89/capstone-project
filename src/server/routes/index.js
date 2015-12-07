var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {spread: true});
var Product = mongoose.model('products');
var nodemailer = require('nodemailer');
var stubTransport = require('nodemailer-stub-transport');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mail', function (req, res, next) {
  var transport = nodemailer.createTransport(stubTransport());
  var mailData = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};
    transport.sendMail(mailData, function(err, info){
      if(err){
        return console.log(err);
    }
      console.log(info.response.toString());
});
  res.send(200);
});





module.exports = router;
