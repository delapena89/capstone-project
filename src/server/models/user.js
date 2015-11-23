var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require = ('passport-local-mongoose');

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
