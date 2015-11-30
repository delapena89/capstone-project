app.factory('httpService', httpService);
httpService.$inject = ['$http'];

function httpService($http) {
  var factory = {
    getProducts: getProducts
  };

  return factory;

  function getProducts () {
    return $http.get('/products/products');
  }

}
