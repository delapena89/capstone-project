app.controller('shoppingCtrl', ['$scope','httpService','$rootScope','cartService', function($scope, httpService, $rootScope, cartService) {

  $scope.orderHistory = cartService.getCart();
  console.log($scope.orderHistory);

  $scope.checkout = function() {
    console.log('click');
    console.log($scope.orderHistory);
  };

}]);
