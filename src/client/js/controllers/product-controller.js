app.controller('productCtrl', ['$scope','httpService', '$location', '$uibModal', function($scope, httpService, $location, $uibModal) {

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

  $scope.getSingleProduct = function(id) {
    httpService.getSingleProduct(id)
    .success(function(response) {
      console.log(response);
      $scope.product = response;
    });
  };

  $scope.status = {
    isopen: false
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.openModal = function () {
           var modalInstance = $uibModal.open({
              templateUrl: 'views/individual-product.html',
              controller: 'modalCtrl',
              size: 'sm',
              backdrop: 'static'
            });
          };





$scope.getProducts();




}]);
