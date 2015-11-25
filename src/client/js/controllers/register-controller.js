app.controller('registerCtrl', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location){

  $scope.success = false;
  $scope.message = '';

  $scope.register = function () {
    console.log($scope.customername, $scope.customerusername, $scope.customerpassword);
    $http.get('/users/findByUsername/' + $scope.customerusername)
    .then(function(res){
    if (res.data) {
      console.log('username is taken');
      $scope.success = true;
      $scope.message = 'Username is already taken, please try another one.';
    } else {
      $http.post('/users/register', {
        name: $scope.customername,
        username: $scope.customerusername,
        password: $scope.customerpassword
      }).then(function(data){
        console.log(data);
        $location.path('/customer-login');
      });
    }
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
      console.log(data.data.user.name);
      $rootScope.userName = data.data.user.name;
      $location.path('/');
    });
  };

  $scope.logOut = function() {
    console.log('click');
    $http.get('/users/logout')
    .then(function(data) {
      console.log(data);
      console.log('user is logged out');
      $rootScope.userName = '';
      $location.path('/');
    });
  };

  $scope.loggedIn = function() {
    if ($rootScope.userName === name) {
      return true;
    } else {
      return false;
    }
  };





}]);
