app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app.table[home]', {
    url: '/table/home',
    views : {
      'menuContent' :{
          templateUrl: 'templates/table/home.html',
          controller: 'menuCtrl'
      }
    }
  })

  .state('app.table[menu]', {
    url: '/table/menu',
    views : {
      'menuContent' :{
          templateUrl: 'templates/table/menu.html',
          controller: 'menuCtrl'
      }
    }
  })

  .state('app.table[order]', {
    url: '/table/order',
    views : {
      'menuContent' :{
          templateUrl: 'templates/table/order.html',
          controller: 'orderCtrl'
      }
    }
  });

});