(function() {
	angular.module('MenuApp').controller("itemsCtrl", itemsController);

	itemsController.$inject = ["$scope", "items"]

	function itemsController($scope, items) {
		$scope.items = items;
	};
})();