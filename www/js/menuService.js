var service = angular.module('ionicApp.service', [])

service
	.factory('menuService', function($http) {
		return {
			getMenu: function() {
				return $http.get("https://api.myjson.com/bins/516tr"); // "/json/menu.json"
			}
		}
	});