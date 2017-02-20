(function() {
	"use strict";

	angular.module('common')
		.factory('userService', userService);


	userService.$inject = ['ApiPath'];

	function userService(ApiPath) {
		var loginUser = {};
		this.setUser = function(user) {
			loginUser = user;
		};

		this.getUser = function() {
			return loginUser;
		};

		return this;

	}



})();