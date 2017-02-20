(function() {
	angular.module('MenuApp').factory('MenuDataService', MenuDataService);

	MenuDataService.$inject = ["$q", "$http"];

	function MenuDataService($q, $http) {

		this.getAllCategories = function() {
			var deferred = $q.defer();
			$http.get("https://davids-restaurant.herokuapp.com/categories.json").then(function(results) {
				var categories = results.data;
				return deferred.resolve(categories);
			}, function() {
				return deferred.reject(error);
			});

			return deferred.promise;
		};
		this.getItemsForCategory = function(categoryShortName) {
			var deferred = $q.defer();
			$http.get("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName).then(function(results) {
				var items = results.data.menu_items;
				return deferred.resolve(items);
			}, function() {
				return deferred.reject(error);
			});

			return deferred.promise;
		};

		return this;
	};
})()