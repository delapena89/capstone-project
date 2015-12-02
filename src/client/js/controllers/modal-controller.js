app.controller('modalCtrl', ['$scope','$uibModalInstance', function($scope, $uibModalInstance) {
  $scope.closeModal = function () {
    console.log("test");
    $uibModalInstance.dismiss('cancel');
  };
}]);
