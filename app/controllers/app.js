var module = angular.module("myApp", ['ui.router']);

module.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
			controller:'homeCtrl'
        })
        .state('myreservations', {
           url: '/myreservations',
           templateUrl: 'templates/myreservations.html'    
        });
        
});