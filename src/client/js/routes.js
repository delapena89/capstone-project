app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/products', {
      templateUrl: 'views/products.html'
    })
    .when('/add-product', {
      templateUrl: 'views/add-product.html'
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
    .when('/checkout', {
      templateUrl: 'views/checkout.html'
    })
    .when('/admin-register', {
      templateUrl: 'views/admin-register.html'
    });
});
