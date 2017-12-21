angular.module("app").factory('userListService', ['$http', function ($http) {

  var service = {

    userData: function (data, success, error) {
      debugger;
      var headers = {
        'Content-Type': 'application/json',
        "auth_token": JSON.parse(localStorage.todos).auth_token
      }
      $http.get(baseURL() + "/auth/user/" + data, { headers: headers })
        .then(success, error);

    },
    userList: function (data, success, error) {
      debugger;
      var headers = {
        'Content-Type': 'application/json',
        "auth_token": JSON.parse(localStorage.todos).auth_token
      }
      $http.get(baseURL() + "/auth/getAllUser", { headers: headers })
        .then(success, error);

    }
  }
  return service;

}]);