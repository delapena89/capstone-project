app.controller('shoppingCtrl', ['$scope','httpService','$rootScope','cartService', '$location', function($scope, httpService, $rootScope, cartService, $location) {

  $scope.orderHistory = cartService.getCart();
  console.log($scope.orderHistory);

  $scope.form = true;

  // $scope.next = function() {
  //   $scope.form = false;
  // };


  $scope.checkout = function() {
    console.log('click');
    console.log($scope.orderHistory);
    $location.path('/checkout');
  };

  $scope.remove = function (index) {
    $scope.orderHistory.splice(index, 1);
  };

  $scope.submitOrder = function() {
    var orderResults = httpService.submitOrder($scope.customer);
    orderResults.then(function (response) {
      if (response.object === 'charge') {
        $location.path('/order-success');
        console.log(response);
      } else {
        $location.path('/credit-card-error');
        $rootScope.errorMessage = response;
        console.log(response);
      }
    });

  };

}]);
