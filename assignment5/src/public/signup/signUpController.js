(function() {
	"use strict";

	angular.module('public').controller('SignUpCtrl', SignUpController);

	SignUpController.$inject = ["$scope", 'userService'];

	function SignUpController($scope, userService) {
		$scope.createUser = function() {
			userService.setUser({
				email: $scope.email,
				firstName: $scope.firstName,
				lastName: $scope.lastName,
				phone: $scope.phone,
				dish: $scope.dishCode
			});
			$scope.email = "";
			$scope.firstName = "";
			$scope.lastName = "";
			$scope.phone = "";
			$scope.dishCode = "";
		};
	}

})();