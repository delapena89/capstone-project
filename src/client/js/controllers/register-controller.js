app.controller('registerCtrl', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location){

  $scope.register = function () {
    console.log($scope.customername, $scope.customerusername, $scope.customerpassword);
    $http.post('/users/register', {
      name: $scope.customername,
      username: $scope.customerusername,
      password: $scope.customerpassword
    }).then(function(data){
      console.log(data);
      $location.path('/customer-login');
    });
  };

  $scope.login = function () {
    console.log('click');
    $http.post('/users/login', {
      name: $scope.customername,
      username: $scope.customerusername,
      password: $scope.customerpassword
    })
    .then(function(data){
      console.log(data.data.user);
      $rootScope.user = data.data.user;
      $location.path('/');
    });
  };





}]);
