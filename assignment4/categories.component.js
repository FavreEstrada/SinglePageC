(function() {


	angular.module('MenuApp').directive("categories", CategoriesController);

	//CategoriesController.$inject = [""];

	function CategoriesController() {
		return {
			template: '<ul><li ng-repeat="category in categories"> <a ui-sref="items({category: category.short_name})">{{category.name}}</a></li></ul>',
			restrict: "E",
			scope: {
				categories: "<"
			}
		};
	};
})();