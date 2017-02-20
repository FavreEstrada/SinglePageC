(function() {
	angular.module('MenuApp').controller("categoriesCtrl", categoriesController);

	categoriesController.$inject = ["$scope", "categories"]

	function categoriesController($scope, categories) {
		$scope.categories = categories;
	};
})();