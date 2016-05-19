var app1 = angular.module("NearMeApp", ['leaflet-directive', 'ngRoute']);
app1.config(function($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'LocationController',
    	templateUrl: 'views/main.html'
  	})
  	.when('/about', {
    	controller: 'AboutController',
    	templateUrl: 'views/about.html'
  	})
  	.otherwise({
    	redirectTo: '/'
  	});
});
