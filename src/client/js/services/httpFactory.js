app.factory('httpService', httpService);
httpService.$inject = ['$http'];

function httpService($http) {
  var factory = {
    addProduct: addProduct,
    getProducts: getProducts
  };

  return factory;

  function addProduct(payload) {
    $http.post('/products', payload)
    .then(function(response) {
      console.log('hello');
      console.log('payload', response);
      return response.data;
    });
  }

  function getProducts () {
    return $http.get('/products/products');
  }

}
