app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      access: {restricted: false}
    })
    .when('/products', {
      templateUrl: 'views/products.html',
      access: {restricted: false}
    })
    .when('/customer-service', {
      templateUrl: 'views/customer-service.html',
      access: {restricted: false}
    })
    .when('/order-history', {
      templateUrl: 'views/order-history.html',
      access: {restricted: true}
    })
    .when('/shopping-cart', {
      templateUrl: 'views/shopping-cart.html',
      controller: 'shoppingCtrl',
      access: {restricted: false}
    })
    .when('/sign-up', {
      templateUrl: 'views/register.html',
      access: {restricted: false}
    })
    .when('/customer-login', {
      templateUrl: 'views/customer-login.html',
      access: {restricted: false}
    })
    // .when('/admin-login', {
    //   templateUrl: 'views/admin-login.html'
    // })
    // .when('/drop-in-style-ball-transfer', {
    //   templateUrl: 'views/drop-in-style-ball-transfer.html'
    // })
    // .when('/flange-mounted-ball-transfer', {
    //   templateUrl: 'views/flange-mounted-ball-transfer.html'
    // })
    // .when('/flangeless-ball-transfer', {
    //   templateUrl: 'views/flangeless-ball-transfer.html'
    // })
    // .when('/flying-saucer-ball-transfer', {
    //   templateUrl: 'views/flying-saucer-ball-transfer.html'
    // })
    // .when('/pipe-mounted-ball-transfer', {
    //   templateUrl: 'views/pipe-mounted-ball-transfer.html'
    // })
    // .when('/stud-mounted-ball-transfer', {
    //   templateUrl: 'views/stud-mounted-ball-transfer.html'
    // })
    .when('/add-products', {
      templateUrl: 'views/add-products.html',
      access: {restricted: false}
    })
    .when('/individual-product', {
      templateUrl: 'views/individual-product.html',
      access: {restricted: false}
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html',
      access: {restricted: false}
    })
    .when('/order-success', {
      templateUrl: 'views/order-success.html',
      access: {restricted: false}
    })
    .when('/credit-card-error', {
      templateUrl: 'views/credit-card-error.html',
      access: {restricted: false}
    });

});

app.run(function ($rootScope, $location, $route) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && !$rootScope.user) {
      $location.path('/customer-login');
      $route.reload();
    }
  });
});







