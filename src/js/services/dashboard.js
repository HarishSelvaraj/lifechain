angular.module("app").factory('dashboardService', ['$http', function ($http) {

  var service = {

    getEmployesList: function (data, success, error) {
      var headers = {
        'Content-Type': 'application/json',
        "auth_token": JSON.parse(localStorage.todos).auth_token
      }
      $http.get(baseURL() + "/auth/dashone", { headers: headers })
        .then(success, error);

    },
    getEmployersList: function (data, success, error) {
      var headers = {
        'Content-Type': 'application/json',
        "auth_token": JSON.parse(localStorage.todos).auth_token
      }
      $http.get(baseURL() + "/auth/dashtwo", { headers: headers })
        .then(success, error);

    },
    getJobsList: function (data, success, error) {
    var headers = {
      'Content-Type': 'application/json',
      "auth_token": JSON.parse(localStorage.todos).auth_token
    }
      $http.get(baseURL() + "/auth/dashthree", { headers: headers })
      .then(success, error);

  }
  }
  return service;

}]);