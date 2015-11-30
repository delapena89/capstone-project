app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/products', {
      templateUrl: 'views/products.html'
    })
    .when('/customer-service', {
      templateUrl: 'views/customer-service.html'
    })
    .when('/order-history', {
      templateUrl: 'views/order-history.html'
    })
    .when('/shopping-cart', {
      templateUrl: 'views/shopping-cart.html'
    })
    .when('/register', {
      templateUrl: 'views/register.html'
    })
    .when('/customer-login', {
      templateUrl: 'views/customer-login.html'
    })
    .when('/admin-login', {
      templateUrl: 'views/admin-login.html'
    })
    .when('/drop-in-style-ball-transfer', {
      templateUrl: 'views/drop-in-style-ball-transfer.html'
    });
});
