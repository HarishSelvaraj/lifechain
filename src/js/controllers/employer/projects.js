angular
    .module('app')
    .controller('projectcontrol', ['$scope', function ($scope) {
        $scope.labels = ['Construction Workers', 'In-Store Sales Workers', 'Drivers','Plumbers'];
        $scope.data = [3000, 5000, 1000,2000];
        $scope.liveprojects=3;
    }]);