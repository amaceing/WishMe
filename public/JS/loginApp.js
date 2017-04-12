(function(angular, undefined) {
    "use strict";
    angular.module('loginApp', ['ngMaterial', 'ngMessages']).controller('LoginController', LoginController);

    function LoginController($scope) {
        $scope.email = "";
        $scope.password = "";

        $scope.registerUser() = function() {
            console.log("test2");
        }

        $scope.logUserIn = function() {
            console.log("test");
        }
    }
})(angular);