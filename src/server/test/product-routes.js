process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var Product = require('../models/product');
var should = chai.should();
chai.use(chaiHttp);

describe("products", function() {

  Product.collection.drop();
  var id;


  beforeEach(function(done) {
    var newProduct = new Product({
      sku: 'test',
      price: 20,
      loadCapacity: '75 lbs',
      ballMaterial: 'nylon',
      housingMaterial: 'carbon steel',
      description: 'sample text',
      images: {},
    });
    id = newProduct._id;
    newProduct.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    Product.collection.drop();
    done();
  });



   it('should add a SINGLE item on /items POST',
    function(done) {
      chai.request(server)
      .post('/products/')
      .send({
      sku: 'test2',
      price: 20,
      loadCapacity: '75 lbs',
      ballMaterial: 'nylon',
      housingMaterial: 'carbon steel',
      description: 'sample text',
      images: [],
    })
      .end(function(err,res) {
        console.log(res.body, "RES");
        res.should.have.status(200);
        res.should.be.json;
        res.should.be.a('object');
        res.body[0].sku.should.be.a('string');
        res.body[0].sku.should.be.equal('test2');
        res.body[0].price.should.be.a('number');
        res.body[0].price.should.be.equal(20);
        res.body[0].loadCapacity.should.be.a('string');
        res.body[0].loadCapacity.should.be.equal('75 lbs');
        res.body[0].ballMaterial.should.be.a('string');
        res.body[0].ballMaterial.should.be.equal('nylon');
        res.body[0].description.should.be.a('string');
        res.body[0].description.should.be.equal('sample text');
        done();
      });
    });

});

