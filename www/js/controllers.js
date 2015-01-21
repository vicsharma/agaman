angular.module('ionicApp.controllers', ['ui.router'])

.controller('AppCtrl', function($scope, $ionicModal) {
  
})

.controller('settingsCtrl', function($scope, $ionicModal, $state) {
  	$scope.goToSettings = function() {
	  $state.go('app.modules');
	};

	$scope.applySettings = function() {
  		console.log("Applied");
	  $state.go('app.table[home]');
	};
})

.controller('stewardCtrl', function($scope, $ionicModal, $state) {
	$scope.tables = [1,2,3,4,5,6,7,8,9];
})

.controller('menuCtrl', function($scope,$http) {
	$http.get('/json/menu.json').
	  success(function(data, status, headers, config) {
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