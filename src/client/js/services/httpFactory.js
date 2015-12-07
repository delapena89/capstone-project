app.factory('httpService', httpService);
httpService.$inject = ['$http'];

function httpService($http) {
  var factory = {
    addProduct: addProduct,
    getProducts: getProducts,
    getSingleProduct: getSingleProduct,
    submitOrder: submitOrder,
    getOrders: getOrders
    // pushToShoppingCart: pushToShoppingCart
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

  function submitOrder(payload) {
    // { user_id: $rootScope.user._id,
    //   products: [{ order_date: ..., total: ..., products: []}]}
    return $http.post('/products/checkout', payload)
    .then(function(response) {
      console.log(payload);
      console.log(response.data);
      return response.data;
    });
  }

  function getOrders (id) {
      return $http.get('/users/order-history/' + id);
    }

}







