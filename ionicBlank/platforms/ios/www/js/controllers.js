angular.module('ionicApp.controllers', [])

.controller('menuCtrl', function($scope,$http) {
	$scope.myNumber = 5;
	$http.get('/json/menu.json').
	  success(function(data, status, headers, config) {
	  	console.log(Object.keys(data));
	  	$scope.menuItems = data;
	    // this callback will be called asynchronously
	    // when the response is available
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

	  //'http://192.168.0.118:8000/menu/1'
});