var service = angular.module('ionicApp.service', [])

service
	.factory('menuService', function($http) {
		return {
			getMenu: function() {
				return $http.get("/json/menu.json");
			},
		}
	});