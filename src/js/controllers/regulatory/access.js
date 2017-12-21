angular.module("app").controller('accessCtrl', ['$rootScope', '$scope', '$state', '$interval', '$http', '$timeout', function ($rootScope, $scope, $state, $interval, $http, $timeout) {
    //alert('in');
    //        alert("addjobCtrl");
    $scope.getddata = function () {
        $rootScope.ajaxloader = true;
        $http({
            method: "POST",
            url: baseURL()+"/auth/getnewapproval",
            data: '',
            header: { 'content-type': 'application/JSON' }
        }).then(function mySuccess(response) {

            $timeout(function () {
                $rootScope.ajaxloader = false
            }, 3000);
            $scope.Accessdata = response['data']['ResponseObject'];
            
        }, function myError(response) {
            $rootScope.ajaxloader = false;
        });
    }
    $scope.empApprove = function (empdata) {
       
        $scope.token = localStorage.getItem('todos')
        if ($scope.token) {
            $scope.auth_token = $scope.token.auth_token;
        }

        $http({
            method: "POST",
            url: baseURL()+"/auth/empapproval/" + empdata._id,
            data: '',
            header: { 'content-type': 'application/JSON', 'auth_token': $scope.auth_token }
        }).then(function mySuccess(response) {
            $scope.Accessdata = response['data']['ResponseObject'];
          
        }, function myError(response) {

        });
    }
    $scope.empReject = function (empdata) {
        $scope.token = localStorage.getItem('todos')
        if ($scope.token) {
            $scope.auth_token = $scope.token.auth_token;
        }
        $http({
            method: "POST",
            url: baseURL()+"/auth/empreject/" + empdata._id,
            data: '',
            header: { 'content-type': 'application/JSON', 'auth_token': $scope.auth_token }
        }).then(function mySuccess(response) {
            $scope.Accessdata = response['data']['ResponseObject'];
           
        }, function myError(response) {

        });
    }
    $scope.jobApprove = function (empdata) {
        $scope.token = localStorage.getItem('todos')
        if ($scope.token) {
            $scope.auth_token = $scope.token.auth_token;
        }
      
        $http({
            method: "POST",
            url: baseURL()+"/auth/empapproval/" + empdata._id,
            data: '',
            header: { 'content-type': 'application/JSON', 'auth_token': $scope.auth_token }
        }).then(function mySuccess(response) {
            $scope.Accessdata = response['data']['ResponseObject'];
           
        }, function myError(response) {

        });
    }
    $scope.jobReject = function (empdata) {
        $scope.token = localStorage.getItem('todos')
        if ($scope.token) {
            $scope.auth_token = $scope.token.auth_token;
        }
        $http({
            method: "POST",
            url: baseURL()+"/auth/empreject/" + empdata._id,
            data: '',
            header: { 'content-type': 'application/JSON', 'auth_token': $scope.auth_token }
        }).then(function mySuccess(response) {
            $scope.Accessdata = response['data']['ResponseObject'];
          
        }, function myError(response) {

        });
    }
    $scope.getddata();
    var stop = $interval(function () {

        $scope.getddata();
    }, 15000);
    $scope.$on("$destroy", function () {
        $scope.stop();
    });
}]);