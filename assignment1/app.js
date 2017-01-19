(function() {
	angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheck);

	LunchCheck.$inject = ["$scope"];

	function LunchCheck($scope) {
		'use strict';
		$scope.message = "";

		$scope.check = function() {
			var dishes;
			$scope.badInputMsg = "";
			if ($scope.dishes) {
				dishes = $scope.dishes.split(",");
				var notNull = dishes.every(function(v) {
					return v !== "";
				});
				if (notNull) {
					if (dishes.length > 3) {
						$scope.message = "Too much!";
					} else {
						$scope.message = "Enjoy";
					}
					$scope.class = "success";
				} else {
					$scope.badInputMsg = "Not considering empty items";
					$scope.message = "";
					$scope.class = "";
				}
			} else {
				$scope.message = "Please enter data first";
				$scope.class = "error";
			}

		};
	}
})()