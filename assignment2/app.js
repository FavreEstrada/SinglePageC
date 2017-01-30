(function() {
	var app = angular.module("ShoppingListCheckOff", []);

	app.factory("ShoppingListCheckOffService", ShoppingListCheckOff);

	function ShoppingListCheckOff() {
		'use strict';
		var shoppingList = ["Buy 10 Bananas", "Buy 4 Apples", "Buy 1 Pineapple", "Buy 5 Oranges", "20 Strawberries"];
		var boughtList = [];

		this.buyItem = function(item){
			var index = shoppingList.indexOf(item);
			shoppingList.splice(index, 1);
			boughtList.push(item);
		};
		this.getShoppingList = function() {
			return shoppingList;
		};
		this.getBoughtList = function() {
			return boughtList;
		};

		return this;
	};

	app.controller("ToBuyController", ToBuy);

	ToBuy.$inject = ["ShoppingListCheckOffService"];

	function ToBuy(ShoppingListCheckOffService) {
		'use strict';
		this.items = ShoppingListCheckOffService.getShoppingList();

		this.buy = function(item){
			ShoppingListCheckOffService.buyItem(item);
		};

	};

	app.controller("AlreadyBoughtController", AlreadyBought);

	AlreadyBought.$inject = ["ShoppingListCheckOffService"];

	function AlreadyBought(ShoppingListCheckOffService) {
		'use strict';
		this.items = ShoppingListCheckOffService.getBoughtList();
	};
})()