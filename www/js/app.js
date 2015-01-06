var app = angular.module('ionicApp', ['ionic', 'ui.router','ionicApp.controllers'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/home');

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

  .state('app.steward', {
    url: '/steward/home',
    views : {
      'menuContent' :{
          templateUrl: 'templates/steward/home.html',
          controller: 'stewardCtrl'
      }
    }
  })


  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html'
  });
});