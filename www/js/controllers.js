var AppController = angular.module('ionicApp.controllers', ['ui.router'])

.factory('OrderService', function(){
    return {
        data: {
            orderID:'',
            itemIds:[],
            foodItems:[]
        }
    };
})

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

.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++)
            input.push(i);
        return input;
    };
});


