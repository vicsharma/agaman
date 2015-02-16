var AppController = angular.module('ionicApp.controllers', ['ui.router'])

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

.controller('menuCtrl', function($scope,$http,menuService) {
		 menuService.getMenu().then(function(response){
			$scope.menuItems = response.data;
		},
		function(data){
			console.log("Error");
		});

		 $scope.menuSelected= function(menuItem){
		 	//console.log(element.text());
		 	$scope.item = {
		 		name: menuItem.name,
		 		description: menuItem.description
		 	};
		 };

	  //'http://192.168.0.118:8000/menu/1'
});