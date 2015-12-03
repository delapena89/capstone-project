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
      templateUrl: 'views/shopping-cart.html',
      controller: 'shoppingCtrl'
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
    })
    .when('/flange-mounted-ball-transfer', {
      templateUrl: 'views/flange-mounted-ball-transfer.html'
    })
    .when('/flangeless-ball-transfer', {
      templateUrl: 'views/flangeless-ball-transfer.html'
    })
    .when('/flying-saucer-ball-transfer', {
      templateUrl: 'views/flying-saucer-ball-transfer.html'
    })
    .when('/pipe-mounted-ball-transfer', {
      templateUrl: 'views/pipe-mounted-ball-transfer.html'
    })
    .when('/stud-mounted-ball-transfer', {
      templateUrl: 'views/stud-mounted-ball-transfer.html'
    })
    .when('/add-products', {
      templateUrl: 'views/add-products.html'
    })
    .when('/individual-product', {
      templateUrl: 'views/individual-product.html'
    });

});







