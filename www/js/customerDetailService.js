service
	.factory('customerDetailService', function($http) {
		return {
			postCustomerDetails: function(email) {
				console.log(email);
				return $http({
						    url: 'http://192.168.1.135:8080/service/menu/getCustomer', 
						    method: "GET",
						    params: {'email': email}
						 });
				
			}
		}
	});