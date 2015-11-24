process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var User = require('../models/user');
var should = chai.should();
chai.use(chaiHttp);

describe('users', function() {

  User.collection.drop();
  var id;

  beforeEach(function(done) {
    var newUser = new User({
      name: "bob",
      username: "something",
      password: "other"
    });
    id = newUser._id;
    newUser.save(function(err) {
      done();
    });
  });
  afterEach(function(done) {
    User.collection.drop();
    done();
  });

  it('should add a SINGLE user on register POST',
    function(done) {
      chai.request(server)
      .post('/users/register/')
      .send({
        username: 'test',
        password: 'user'
    })
      .end(function(err,res) {
        res.should.have.status(200);
        res.should.be.json;
        res.should.be.a('object');
        res.body.account.username.should.be.a('string');
        res.body.account.username.should.be.equal('test');
        res.body.account.hash.should.be.a('string');
        done();
      });
    });


  it('should login....',
    function(done) {
      chai.request(server)
      .post('/login')
      .send({
        username: 'some user',
        password: 'some password'
    })
      .end(function(err,res) {
        console.log(res)
        res.should.have.status(200);
        res.should.be.json;
        res.should.be.a('object');
        res.body.account.username.should.be.a('string');
        res.body.account.username.should.be.equal('some user');
        res.body.account.hash.should.be.a('string');
        done();
      });
    });




});
