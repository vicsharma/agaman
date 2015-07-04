AppController
	.controller('orderCtrl', function($scope,$http,OrderService) {
	  	$scope.order = OrderService.data;
        console.log($scope.order);

        $scope.incrementQuantity = function(index){
            console.log($scope.order.foodItems[index]);
            $scope.order.foodItems[index].quantity=$scope.order.foodItems[index].quantity+1;
            OrderService.data = $scope.order;
        }

        $scope.decrementQuantity = function(index){
            $scope.order.foodItems[index].quantity=$scope.order.foodItems[index].quantity-1;
            OrderService.data = $scope.order;
        }

        $scope.removeFromList = function(index){
            if (index > -1) {
                $scope.order.foodItems.splice(index, 1);
            }
            OrderService.data = $scope.order;
            localStorage.setItem('currentOrder',JSON.stringify(OrderService.data));
        }

	})

	.controller('userDetailsCtrl', function($scope,$state,customerDetailService){

		$scope.guestLogin = function(){
			$state.go('app.table[menu]');
		};

		$scope.submitDetails = function(userDetails){
			console.log(userDetails);
			customerDetailService.postCustomerDetails(userDetails).then(function(response){
				console.log(response.data);
				$state.go('app.table[menu]');
			},
			function(data){
				console.log(data);
			});
		   	//$state.go('app.table[menu]');
			
		};
	});

