app.controller('shoppingCtrl', ['$scope','httpService','$rootScope','cartService', '$location', function($scope, httpService, $rootScope, cartService, $location) {

  $scope.orderHistory = cartService.getCart();
  console.log($scope.orderHistory);


  $scope.checkout = function() {
    console.log('click');
    console.log($scope.orderHistory);
    $location.path('/checkout');
  };

  $scope.remove = function (index) {
    $scope.orderHistory.splice(index, 1);
  };

  $scope.submitOrder = function() {
    console.log($scope.orderHistory);
    var orderResults = httpService.submitOrder({customer: $scope.customer, user: $rootScope.user.id, products: $scope.orderHistory});
    orderResults.then(function (response) {
      console.log($scope.customer);
        if (response.charge) {
          $location.path('/order-success');
          cartService.clearCart();
          console.log(response);
        } else {
          $location.path('/credit-card-error');
          $rootScope.errorMessage = response.raw.message;
          console.log(response.raw.message);
      }
    });

  };

}]);
