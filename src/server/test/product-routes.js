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
      image1: 'some picture',
      image2: 'some picture2'
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
      image1: 'some picture',
      image2: 'some picture2'
    })
      .end(function(err,res) {
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
        res.body[0].housingMaterial.should.be.a('string');
        res.body[0].housingMaterial.should.be.equal('carbon steel');
        res.body[0].description.should.be.a('string');
        res.body[0].description.should.be.equal('sample text');
        res.body[0].image1.should.be.a('string');
        res.body[0].image1.should.be.equal('some picture');
        res.body[0].image2.should.be.a('string');
        res.body[0].image2.should.be.equal('some picture2');
        done();
      });
    });

  it('should list ALL items on /items GET',
    function(done) {
      chai.request(server)
      .get('/products')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].sku.should.be.a('string');
        res.body[0].sku.should.equal('test');
        res.body[0].price.should.be.a('number');
        res.body[0].price.should.be.equal(20);
        res.body[0].loadCapacity.should.be.a('string');
        res.body[0].loadCapacity.should.be.equal('75 lbs');
        res.body[0].ballMaterial.should.be.a('string');
        res.body[0].ballMaterial.should.be.equal('nylon');
        res.body[0].housingMaterial.should.be.a('string');
        res.body[0].housingMaterial.should.be.equal('carbon steel');
        res.body[0].description.should.be.a('string');
        res.body[0].description.should.be.equal('sample text');
        res.body[0].image1.should.be.a('string');
        res.body[0].image1.should.be.equal('some picture');
        res.body[0].image2.should.be.a('string');
        res.body[0].image2.should.be.equal('some picture2');
        done();
      });
    });

it('should list a SINGLE item on /item/<id> GET',
    function(done) {
      chai.request(server)
      .get('/products/' + id)
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        console.log(res.body);
        console.log(id);
        res.body.should.be.a('object');
        res.body.sku.should.be.a('string');
        res.body.sku.should.be.equal('test');
        res.body.price.should.be.a('number');
        res.body.price.should.be.equal(20);
        res.body.loadCapacity.should.be.a('string');
        res.body.loadCapacity.should.be.equal('75 lbs');
        res.body.ballMaterial.should.be.a('string');
        res.body.ballMaterial.should.be.equal('nylon');
        res.body.housingMaterial.should.be.a('string');
        res.body.housingMaterial.should.be.equal('carbon steel');
        res.body.description.should.be.a('string');
        res.body.description.should.be.equal('sample text');
        res.body.image1.should.be.a('string');
        res.body.image1.should.be.equal('some picture');
        res.body.image2.should.be.a('string');
        res.body.image2.should.be.equal('some picture2');
        done();
      });
    });

  it('should update a SINGLE item on /item/<id> PUT',
    function(done) {
      chai.request(server)
      .put('/products/' + id)
      .send({
      sku: 'test test',
      price: 40,
      loadCapacity: '100 lbs',
      ballMaterial: 'stainless steel',
      housingMaterial: 'carbon steel',
      description: 'more sample text',
      image1: 'some picture url',
      image2: 'some picture2 url'
    })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        console.log(res.body);
        console.log(id);
        res.body.should.be.a('object');
        res.body.sku.should.be.a('string');
        res.body.sku.should.be.equal('test test');
        res.body.price.should.be.a('number');
        res.body.price.should.be.equal(40);
        res.body.loadCapacity.should.be.a('string');
        res.body.loadCapacity.should.be.equal('100 lbs');
        res.body.ballMaterial.should.be.a('string');
        res.body.ballMaterial.should.be.equal('stainless steel');
        res.body.housingMaterial.should.be.a('string');
        res.body.housingMaterial.should.be.equal('carbon steel');
        res.body.description.should.be.a('string');
        res.body.description.should.be.equal('more sample text');
        res.body.image1.should.be.a('string');
        res.body.image1.should.be.equal('some picture url');
        res.body.image2.should.be.a('string');
        res.body.image2.should.be.equal('some picture2 url');
        done();
      });
    });




});

