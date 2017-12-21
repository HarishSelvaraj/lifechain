angular.module("app").controller('userController', ['$rootScope', '$scope', '$state', '$interval', '$http', '$timeout','userListService', function ($rootScope, $scope, $state, $interval, $http, $timeout,userListService) {
  $scope.userselected = '';

  userListService.userList("", function (data, status) {
    debugger;
    $scope.userlistdata = data.data.ResponseObject;
  }, function () {

  });
  var Employeeqrcode = new QRCode(document.getElementById("Employeeqrcode"), {
    width: 100,
    height: 100,
  });
  var Employerqrcode = new QRCode(document.getElementById("Employerqrcode"), {
    width: 100,
    height: 100,
  });
 
  $scope.searchUser = function (user) {
    debugger;
    userListService.userData(user.systemid, function (data, status) {
    debugger;
    $scope.selectedUsers = data.data.ResponseObject;
    if ($scope.selectedUsers.role == 'Employer') {
      Employerqrcode.makeCode(data.data.ResponseObject.systemid);
    } else {
      Employeeqrcode.makeCode(data.data.ResponseObject.systemid);
    }
   

  }, function () {

  });
  }


}]);