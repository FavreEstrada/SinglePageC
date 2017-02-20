(function() {
	"use strict";

	angular.module('public').controller('InfoCtrl', InfoController);

	InfoController.$inject = ["$scope", 'userService', 'MenuService', 'ApiPath'];

	function InfoController($scope, userService, MenuService, ApiPath) {
		var user = userService.getUser();
		$scope.firstName = user.firstName;
		$scope.lastName = user.lastName;
		$scope.email = user.email;
		$scope.phone = user.phone;

		if (user.dish) {
			getFavoriteDish(user.dish);
		}

		function getFavoriteDish(dishCode) {
			MenuService.getMenuItems().then(function(data) {
				var found = data.menu_items.filter(function(v, i) {
					return v.short_name === dishCode;
				});
				if (found && found.length) {
					$scope.dishCode = found[0].short_name + " - " + found[0].name + " - " + found[0].description;
					$scope.imageUrl = ApiPath + "/images/" + found[0].short_name;
				} else {
					$scope.dishCode = "No such menu number exists";
				}
			});
		}
	}

})();