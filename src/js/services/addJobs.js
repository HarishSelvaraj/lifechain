angular.module("app").factory('addjobsService', [function () {

  var service = {

    jobPost: function (data,success, error) {
      var headers = {
        'Content-Type': 'application/json',
        "auth_token":JSON.pare(localStorage.todos)
      }
      $http.post("http://10.91.17.123:4000/auth/jobpost", data, { headers: headers })
        .then(success, error);

    }
  }
  return service;

}]);