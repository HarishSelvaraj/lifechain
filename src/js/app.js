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
//alert('in');
                $scope.menus = {
                    'Employee': ['Ananth', 'Solomon'],
                    'Employer': [],
                    'Regulatory': []
                };
            }])
        .controller('employeecontrol', ['$scope', function ($scope) {


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
//                alert("Employee");
                $scope.country = [{id: "1", name: "India"}, {id: "1", name: "America"}, {id: "1", name: "Russia"}, {id: "1", name: "London"}];
                $scope.skills = [{id: "1", name: "Welder"}, {id: "1", name: "Fitter"}, {id: "1", name: "ITI"}, {id: "1", name: "DME"}];

                $scope.coun_change = function (data) {
                    if (data == "India") {
                        $scope.aadharno = true;
                    } else {
                        $scope.aadharno = false;
                    }
                    debugger;
                }
            }])
        .controller('employercontrol', ['$scope', function ($scope) {
//alert('in');
                alert("Employer");
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
