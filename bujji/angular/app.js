angular.module('myApp',['ngRoute'])
.config(function($routeProvider) {
	$routeProvider
    .when('/page1', {
      controller:'page1Ctrl',
      templateUrl:'page1.html'
    })
    .when('/page2', {
      controller:'page2Ctrl',
      templateUrl:'page2.html'
    })
    .when('/page3', {
      controller:'page3Ctrl',
      templateUrl:'page3.html'
    })
    .otherwise({
      redirectTo:'/page1'
    });
});