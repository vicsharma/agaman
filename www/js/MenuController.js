AppController
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
        	$scope.item = {
        		name: menuItem.name,
        		description: menuItem.description,
                imgUrl : menuItem.imgUrl,
                chillyrating : menuItem.chillyrating,
                veg : menuItem.veg,
                netQty : 0,
                price : menuItem.price
        	};
        };

        $scope.addQty = function(){
            if($scope.item.netQty >= 0){
                $scope.item.netQty = $scope.item.netQty + 1;
            }
        }

        $scope.removeQty = function(){
            if($scope.item.netQty >= 1) {
                $scope.item.netQty = $scope.item.netQty - 1;
            }
        }

        $scope.addItemToOrder = function(menuItem){
            var id = menuItem.id;

            var items = OrderService.data.foodItems,
                itemIds = OrderService.data.itemIds;

            if(itemIds.indexOf(id)==-1){
                var item = {
                    id:menuItem.id,
                    name: menuItem.name,
                    description: menuItem.description,
                    price: '',
                    quantity: 1
                };
                items.push(item);

                OrderService.data.itemIds.push(id);
            }else{
                for(var i in items){
                    if(items[i].id == id){
                        console.log(items[i].name);
                        items[i].quantity = items[i].quantity + 1;
                    }
                }

            }

            OrderService.data.foodItems = items;
        };


        $scope.foodCart = function(){
            localStorage.setItem('currentOrder',JSON.stringify(OrderService.data));
            $state.go('app.table[order]');
        };

	  //'http://192.168.0.118:8000/menu/1'
});