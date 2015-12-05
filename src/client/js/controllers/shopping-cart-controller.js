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
    $scope.customers = httpService.submitOrder($scope.customer);
    $location.path('/order-success');
  };

}]);
