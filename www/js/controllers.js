var AppController = angular.module('ionicApp.controllers', ['ui.router'])

.filter('filterFunction', function (searchText) {
    // function that's invoked each time Angular runs $digest()
    // pass in `item` which is the single Object we'll manipulate
    return function (item) {
        // return the current `item`, but call `toUpperCase()` on it
        return item.toUpperCase();
    };
})

.factory('OrderService', function(){
    return {
        data: {
            orderID:'',
            foodItems:[]
        }
        // Other methods or objects can go here
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

.controller('menuCtrl', function($scope,$state,$http,menuService,OrderService) {
		 menuService.getMenu().then(function(response){

			$scope.menuItems = response.data;
		},
		function(response){
			alert("error");
		});

        $scope.order={};
        $scope.order.items = [];

		 $scope.menuSelected= function(menuItem){
		 	//console.log(element.text());
		 	$scope.item = {
		 		name: menuItem.name,
		 		description: menuItem.description
		 	};
		 };

        $scope.addItemToOrder = function(menuItem){
            var item = {
                name: menuItem.name,
                description: menuItem.description,
                price:'',
                quantity:0
            };

            OrderService.data.foodItems.push(item);
            //$scope.order.items.push(item);
            console.log(OrderService.data.foodItems);
        };


        $scope.foodCart = function(){
            localStorage.setItem('currentOrder',JSON.stringify(OrderService.data));
            $state.go('app.table[order]');
        };

	  //'http://192.168.0.118:8000/menu/1'
});