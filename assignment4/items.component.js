(function() {


	angular.module('MenuApp').directive("items", ItemsDirective);

	//ItemsDirective.$inject = [""];

	function ItemsDirective() {
		return {
			template: '<ul><li ng-repeat="item in items">{{item.name}}</li></ul>',
			restrict: "E",
			scope: {
				items: "<"
			}
		};
	};
})();