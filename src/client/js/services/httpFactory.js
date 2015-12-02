app.factory('httpService', httpService);
httpService.$inject = ['$http'];

function httpService($http) {
  var factory = {
    addProduct: addProduct,
    getProducts: getProducts,
    getSingleProduct: getSingleProduct,
    pushToShoppingCart: pushToShoppingCart
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

  function getSingleProduct(id) {
    console.log('click');
    console.log(id);
    return $http.get('/products/products/' + id);
  }

  function pushToShoppingCart(id) {
    console.log('click');
  }


}







