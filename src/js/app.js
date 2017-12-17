// Default colors
var brandPrimary = '#20a8d8';
var brandSuccess = '#4dbd74';
var brandInfo = '#63c2de';
var brandWarning = '#f8cb00';
var brandDanger = '#f86c6b';
var grayDark = '#2a2c36';
var gray = '#55595c';
var grayLight = '#818a91';
var grayLighter = '#d1d4d7';
var grayLightest = '#f8f9fa';
angular
        .module('app', [
            'ui.router',
            'oc.lazyLoad',
            'ncy-angular-breadcrumb',
            'angular-loading-bar'
        ])
        .controller('maincontrol', ['$scope', function ($scope) {
                $scope.login = sessionStorage.getItem('foo');

                $scope.menus = {
                    'Employee': [{
                            name: "Home",
                            uiSref: "app.components.employee_home"
                        }, {
                            name: "View Projects",
                            uiSref: "app.components.add_job"
                        }
                    ],
                    'Employer': [{
                            name: "Home",
                            uiSref: "app.components.home"
                        }, {
                            name: "Projects",
                            uiSref: "app.components.projects"
                        }, {
                            name: "Add Job",
                            uiSref: "app.components.addJobs"
                        }],
                    'Regulatory': []
                };
                // {
                //     name: "Job Openings",
                //     uiSref: "app.components.jobs"
                //   },
            }])
        .controller('employeecontrol', ['$scope', '$state', '$http', function ($scope, $state, $http) {
                $scope.validatePassword = function (employee) {
                    debugger;
                    var password = employee.password;
                    var confirm_password = employee.confirmpassword;
                    if (confirm_password != undefined && password != confirm_password) {
//                        confirm_password.setCustomValidity("Passwords Don't Match");
                        $("#confirmpassword").addClass("danger");
                    }
                };
                $scope.aadharno = false;
                $scope.employee = {};
                $scope.country = [{id: "1", name: "India"}, {id: "1", name: "America"}, {id: "1", name: "Russia"}, {id: "1", name: "London"}];
                $scope.skills = [{id: "1", name: "Welder"}, {id: "1", name: "Fitter"}, {id: "1", name: "ITI"}, {id: "1", name: "DME"}];
                $scope.coun_change = function (data) {
                    if (data == "India") {
                        $scope.aadharno = true;
                    } else {
                        $scope.aadharno = false;
                    }
                    debugger;
                };
                $scope.save = function (data_log) {
                    debugger;
                    data_log.role = "Employee";
                    data_log.appstatus = true;
                    debugger;
                    $http({
                        method: 'POST',
                        url: ' http://10.91.17.123:4000/auth/signup',
                        data: data_log
                    }).then(function successCallback(response) {

                        $state.go("appSimple.login");
                    }, function errorCallback(response) {
                        alert("Server Error");
                    });
//                    $state.go("app.components.labour");
                };
            }])
        .controller('logincontrol', ['$scope', '$state', '$http', function ($scope, $state, $http) {
                $scope.user = {};
                $scope.reg = function (data_log) {
                    debugger;
                    $http({
                        method: 'POST',
                        url: 'http://10.91.17.123:4000/auth/login',
                        data: data_log
                    }).then(function successCallback(response) {
                        if (response.role == "Employee") {
                            $state.go("app.components.employee_home");
                        } else if (response.role == "Employer") {
//app.components.home
                            $state.go("app.components.home");
                        } else if (response.role == "admin") {

                        } else {

                        }
                        sessionStorage.setItem('foo', response);
                    }, function errorCallback(response) {
                        alert("Please Ensure the Credentials");
                    });
                };
                $scope.regi = function (data_log) {
                    debugger;

                    $state.go("appSimple.register");

                };
            }])
        .controller('employercontrol', ['$scope', function ($scope) {
            }])
        .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
                cfpLoadingBarProvider.includeSpinner = false;
                cfpLoadingBarProvider.latencyThreshold = 1;
            }])
        .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
                $rootScope.$on('$stateChangeSuccess', function () {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                });
                $rootScope.$state = $state;
                return $rootScope.$stateParams = $stateParams;
            }]);
