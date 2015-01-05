var app = angular.module('ionicApp', ['ionic', 'ionicApp.controllers'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html'
  });
});