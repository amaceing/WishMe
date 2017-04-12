(function(angular, undefined) {
    "use strict";
    angular.module('loginApp', ['ngMaterial', 'ngMessages']).controller('LoginController', LoginController);

    function LoginController($scope) {
        $scope.email = "";
        $scope.password = "";

        $scope.logUserIn = function() {
            console.log("test");
        }
    }
})(angular);