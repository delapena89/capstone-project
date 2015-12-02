app.controller('shoppingCtrl', ['$scope','httpService','$rootScope', function($scope, httpService, $rootScope) {

  $scope.orderHistory = $rootScope.orderHistory;

}]);
