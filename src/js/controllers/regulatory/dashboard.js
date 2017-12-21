angular.module("app").controller('dashboardController', ['$rootScope', '$scope', '$state', '$interval', '$http', '$timeout', 'dashboardService', function ($rootScope, $scope, $state, $interval, $http, $timeout, dashboardService) {
  dashboardService.getEmployesList("", function (data,status) {
    $scope.Employee = data.data.ResponseObject[0].Employee
  }, function () { });
  dashboardService.getEmployersList("", function (data, status) {
    debugger;
    $scope.Employer = data.data.ResponseObject[0].Employer
  }, function () { });
  dashboardService.getJobsList("", function (data,status) {
    $scope.jobs = data.data.ResponseObject[0].jobCount
  }, function () { });
}]);