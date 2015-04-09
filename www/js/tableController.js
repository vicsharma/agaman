AppController
	.controller('orderCtrl', function($scope,$http,OrderService) {
	  	$scope.order = JSON.parse(localStorage.getItem('currentOrder'));

        $scope.incrementQuantity = function(index){
            $scope.order.foodItems[index].quantity=$scope.order.foodItems[index].quantity+1;
        }

        $scope.decrementQuantity = function(index){
            $scope.order.foodItems[index].quantity=$scope.order.foodItems[index].quantity-1;
        }

        $scope.removeFromList = function(index){
            if (index > -1) {
                $scope.order.foodItems.splice(index, 1);
            }
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

