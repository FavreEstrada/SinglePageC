(function() {
	'use strict';

	var app = angular.module("NarrowItDownApp", []);

	app.factory("MenuSearchService", MenuSearchService);

	MenuSearchService.$inject = ["$http", "$q"];

	function MenuSearchService($http, $q) {
		this.getMatchedMenuItems = function(searchTerm) {
			var deferred = $q.defer();
			$http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function(results) {
				var items = results.data.menu_items;
				var found = [];
				items.forEach(function(val, i) {
					if (val.description.indexOf(searchTerm) !== -1) {
						found.push(val);
					}
				});
				return deferred.resolve(found);
			}, function() {
				return deferred.reject(error);
			});

			return deferred.promise;
		};

		return this;

	};

	app.controller("NarrowItDownController", NarrowController);

	NarrowController.$inject = ["MenuSearchService"];

	function NarrowController(MenuSearchService) {
		this.searchText = "";

		this.search = function() {
			var self = this;
			self.found = [];
			MenuSearchService.getMatchedMenuItems(this.searchText).then(function(founds) {
				self.found = founds;
			});

		};

		this.onRemove = function(index) {
			this.found.splice(index, 1);
		};
	};

	app.directive("foundItems", foundItemsController);

	//foundItemsController.$inject = [""];

	function foundItemsController() {
		return {
			template: '<div class="container"><div class="col-sm-12" ng-if="!founds.length">Nothing Found</div><ul class="col-sm-12" ng-if="founds.length"><li ng-repeat="item in founds" style="list-style: none; margin-bottom: 20px;" class="row"><div class="col-sm-10"><div>{{item.short_name}}</div><div>{{item.name}}</div><div>{{item.description}}</div></div><div class="col-sm-2"><button class="btn btn-primary" ng-click="onRemove({index: $index})">Don\'t want this one!</button></div></li></ul></div>',
			restrict: "E",
			scope: {
				foundItems: "<",
				onRemove: "&"
			},
			link: function(scope, element, attrs) {
				var founds;
				scope.$watch("foundItems", function(newVal, oldVal) {
					if (newVal && newVal.length) {
						scope.founds = newVal;
					}

				});
			}
		};
	};
})()