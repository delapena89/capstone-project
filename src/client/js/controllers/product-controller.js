app.controller('productCtrl', ['$scope','httpService', '$location', function($scope, httpService, $location) {

  console.log('it is working');

  $scope.addProduct = function() {
    $scope.products = httpService.addProduct($scope.product);
    $location.path('/products');
  };

  $scope.getProducts = function() {
    httpService.getProducts()
    .success(function(response) {
      $scope.products = response;
      console.log($scope.products);
    });
  };

$scope.getProducts();




}]);
