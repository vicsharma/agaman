app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app.steward[home]', {
    url: '/steward/home',
    views : {
      'menuContent' :{
          templateUrl: 'templates/steward/home.html',
          controller: 'stewardCtrl'
      }
    }
  });

});