var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  name: String,
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
