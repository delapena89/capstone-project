app.controller('productCtrl', ['$scope','httpService', '$location', '$uibModal', '$rootScope', 'cartService', function($scope, httpService, $location, $uibModal, $rootScope, cartService) {

  console.log('it is working');
  $scope.orderHistory = cartService.getCart();

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
      $rootScope.product = response;
    });
  };

  $scope.pushToShoppingCart = function(product) {
    // httpService.pushToShoppingCart(id)
    // .success(function(response) {
    //   console.log(response);
      // var addToCartProduct = response;
      $scope.orderHistory.push(product);
      console.log(cartService.getCart());
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
