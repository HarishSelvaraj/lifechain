angular.module("app").controller('labourCtrl', ['$scope', '$state', function ($scope, $state) {
//alert('in');
        
  $scope.role=JSON.parse(localStorage.getItem('todos'));
  
  		
        $scope.go = function () {
            debugger;
            $state.go("app.components.employee_home");

        };
        debugger;
 var qrcode = new QRCode("qrcode");
    alert($scope.role.systemid);
    qrcode.makeCode($scope.role.systemid);
    }]);