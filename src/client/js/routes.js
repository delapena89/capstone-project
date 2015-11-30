app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/products', {
      templateUrl: 'views/products.html'
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
    .when('/customer-service', {
      templateUrl: 'views/customer-service.html'
    })
    .when('/shopping-cart', {
      templateUrl: 'views/shopping-cart.html'
    });
});
