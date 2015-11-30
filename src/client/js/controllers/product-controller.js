app.controller('productCtrl', ['$scope','httpService', function($scope, httpService) {

  console.log('it is working');

  $scope.getProducts = function() {
    httpService.getProducts()
    .success(function(response) {
      $scope.products = response;
      console.log($scope.products);
    });
  };

$scope.getProducts();



}]);
