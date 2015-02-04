AppController
	.controller('orderCtrl', function($scope,$http) {
		$http.get('/json/order.json').
	  	success(function(data, status, headers, config) {
	  		$scope.orderItems = data;
			}).
  		error(function(data, status, headers, config) {

  		});
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
				alert("Please enter a valid email or mobile number");
			});
		   	//$state.go('app.table[menu]');
			
		};
	});

