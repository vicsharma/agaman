var service = angular.module('ionicApp.service', [])

service
	.factory('menuService', function($http) {
		return {
			getMenu: function() {
				return $http.get("https://api.myjson.com/bins/4eih5"); //$http.get("http://localhost:8000/api/movies"); //https://api.myjson.com/bins/37rl5"); // "/json/menu.json"
			},
			getDummyValue : function(){
				return true;
			}
		}
	});