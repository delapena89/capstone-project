app.controller('registerCtrl', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location){

  $scope.register = function () {
    $scope.errors = [];
    var username = $scope.customerusername;
    $http.get('/users/findByUsername/' + username)
      .then(function (res) {
        if (res.data) {
          console.log('username taken');
          $scope.errors.push('username is taken, please try another one');
        }
        else {
          console.log('free username!');
        }

        var email = $scope.customeremail;
        return $http.get('/users/findByEmail/' + email);
      })
      .then(function (res) {

        if (res.data) {
         console.log('email taken');
         $scope.errors.push("email is taken, please try another one");
        } else {
          console.log('email is free!');
        }

        if (!$scope.errors.length) {
          return $http.post('/users/register', {
            name: $scope.customername,
            username: $scope.customerusername,
            email: $scope.customeremail,
            password: $scope.customerpassword
          }).then(function(data){
            console.log(data);
            $location.path('/customer-login');
          });
        }
      });
  };

  // user register
  // $scope.register = function () {
  //   console.log($scope.customername, $scope.customerusername, $scope.customerpassword);
  //   $http.get('/users/findByUsername/' + $scope.customerusername)
  //   .then(function(res){
  //   if (res.data) {
  //     console.log('username is taken');
  //     $scope.success = true;
  //     $scope.message = 'Username is already taken, please try another one.';
  //   } else {
  //     $http.get('/users/findByEmail/' + $scope.customeremail)
  //     .then(function(res){
  //       if (res.data) {
  //         console.log('email is already in use');
  //         $scope.success = true;
  //         $scope.message = "email is already in use";
  //       } else {
  //         $http.post('/users/register', {
  //           name: $scope.customername,
  //           username: $scope.customerusername,
  //           password: $scope.customerpassword
  //         }).then(function(data){
  //           console.log(data);
  //           $location.path('/customer-login');
  //         });
  //       }
  //     })
  //   }
  // });


  // };


  // user login
  $scope.login = function () {
    console.log('click');
    console.log($scope.customername, $scope.customerusername, $scope.customerpassword);
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

  // user log out
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


  // is user logged in or not
  $scope.loggedIn = function() {
    if ($rootScope.userName) {
      return true;
    } else {
      return false;
    }
  };










}]);
