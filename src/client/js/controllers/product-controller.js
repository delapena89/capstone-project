app.controller('productCtrl', ['$scope','httpService', '$location', '$uibModal', '$rootScope', function($scope, httpService, $location, $uibModal, $rootScope) {

  console.log('it is working');
  var orderHistory = [];

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
      $rootScope.selectedProduct = response;
    });
  };

  $scope.pushToShoppingCart = function(id) {
    httpService.pushToShoppingCart(id)
    .success(function(response) {
      console.log(response);
      var addToCartProduct = response;
      orderHistory.push(addToCartProduct);
      console.log(orderHistory);
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
              size: 'lg',
              backdrop: 'static'
            });
          };




$scope.getProducts();




}]);
