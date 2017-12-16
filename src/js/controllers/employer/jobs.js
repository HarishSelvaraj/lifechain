angular
.module('app')
.controller('jobscontrol', ['$scope', function ($scope) {
    $scope.labels = ['100', '200', '300', '500', '600', '2000', '900'];
    $scope.series = ['Series A'];
  
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40]
    ];
    
    $scope.colors = [{
        backgroundColor: brandPrimary,
        borderColor: 'rgba(255,255,255,.55)',
      }];
    $scope.liveprojects=3;
}]);