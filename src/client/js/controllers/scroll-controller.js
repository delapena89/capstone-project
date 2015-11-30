app.controller('scrollCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {

  console.log('its working');

  $scope.scrollTo = function(id) {
    $location.hash(id);
    console.log($location.hash(id));
  };

}]);
