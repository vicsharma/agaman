var app = angular.module('ionicApp', ['ionic', 'ui.router','ionicApp.controllers','ionicApp.service']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('app/table/menu');

  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/sidemenu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: "templates/menu.html",
        controller: 'menuCtrl'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: "templates/login.html",
        controller: 'settingsCtrl'
      }
    }
  })

  .state('app.modules', {
    url: '/modules',
    views : {
      'menuContent' :{
          templateUrl: 'templates/modules.html',
          controller: 'settingsCtrl'
      }
    }
  })

  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html'
  })

  /* Steward Module route  :: Start */

  .state('app.steward[home]', {
    url: '/steward/home',
    views : {
      'menuContent' :{
          templateUrl: 'templates/steward/home.html',
          controller: 'stewardCtrl'
      }
    }
  })

  /* Steward Module route  :: End */

  /* Table Module route :: Start */

  .state('app.table[home]', {
    url: '/table/home',
    views : {
      'menuContent' :{
          templateUrl: 'templates/table/home.html',
          controller: 'userDetailsCtrl'
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

  /* Table Module route :: End */
});