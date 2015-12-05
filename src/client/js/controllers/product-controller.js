app.controller('productCtrl', ['$scope','httpService', '$location', '$uibModal', '$rootScope', 'cartService', function($scope, httpService, $location, $uibModal, $rootScope, cartService) {

  console.log('it is working');
  $scope.orderHistory = cartService.getCart();
  $scope.types = [
    'Flange-Mounted Ball Transfer',
    'Flangeless',
    'Stud Mounted',
    'Stud Mounted Machine',
    'Stud Mounted Machine',
    'Stud Mounted Heavy Duty',
    'Pipe Mounted','Drop In',
    'Drop In Heavy Duty',
    'Flying Saucer'
  ];
  $scope.prices = [
    {
      label: '$0-$20',
      range: [0, 20]
    },
    {
      label: '$20-$40',
      range: [20, 40]
    },
    {
      label: '$40-$60',
      range: [40, 60]
    },
    {
      label: '$60',
      range: [60, 9999999999]
    }
  ];
  $scope.loadCapacity = [
    '10',
    '17',
    '20',
    '33',
    '35',
    '40',
    '75',
    '100',
    '200',
    '125',
    '250',
    '500',
    '750'
  ];
  $scope.ballMaterial = [
    'Carbon Steel',
    'Nylon',
    'Stainless Steel'
  ];
  $scope.housingMaterial = [
    'Carbon Steel',
    'Stainless Steel'
  ];

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

  $scope.filter = function(filterCategory, attribute) {
    console.log(filterCategory, attribute)
    var temp = [];
    for(i=0; i< $scope.products.length; i++){
      if($scope.products[i][filterCategory] === attribute){
        temp.push($scope.products[i]);
        }
      }
    $scope.products = temp;
  };

    $scope.priceFilter = function(stringValue) {
      var range = $scope.prices.filter(function(obj){
        return obj.label === stringValue;
      })[0].range;
      console.log(range);
      var temp = $scope.products.filter(function(obj){
        return obj.price > range[0] && obj.price <= range[1];
      });
      $scope.products = temp;
      console.log($scope.products);
  };




$scope.getProducts();




}]);
