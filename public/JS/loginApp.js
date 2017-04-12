(function(angular, undefined) {
    "use strict";
    angular.module('loginApp', ['ngMaterial', 'ngMessages']).controller('LoginController', LoginController);

    function LoginController($scope, $mdDialog) {
        $scope.email = "";
        $scope.password = "";

        $scope.logUserIn = function() {
            console.log("test");
        }

		$scope.showRegisterUserDialog = function ($event) {
			var parentEl = angular.element(document.body);
			$mdDialog.show({
				parent: parentEl,
				targetEvent: $event,
				templateUrl: 'HTML/registerUserDialog.html',
				clickOutsideToClose: true,
				controller: RegisterUserController
			});

			function RegisterUserController($scope) {
				$scope.email = "";
                $scope.password = "";

                $scope.registerUser = function() {
                    console.log($scope.email + " " + $scope.password);
                    firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode == 'auth/weak-password') {
                            alert('The password is too weak.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                    });
                    $mdDialog.hide();
                }

                $scope.closeDialog = function () {
					$mdDialog.hide();
				}
			}
		}
    }
})(angular);