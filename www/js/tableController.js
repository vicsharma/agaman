angular.module('ionicApp.tableController', ['ui.router'])

.controller('orderCtrl', function($scope,$http) {
	$http.get('/json/menu.json').
	  		success(function(data, status, headers, config) {
	  			$scope.orderItems = data;
			}).
	  		error(function(data, status, headers, config) {

	  		});

	  //'http://192.168.0.118:8000/menu/1'
});