var app = angular.module('apiApp', ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:"partials/home.html",
		controller: "homeController"
		})
	.when('/dog',{
		templateUrl:"partials/dog.html",
		controller: "dogCtrl"
		})
	.when('/cat',{
		templateUrl:"partials/cat.html",
		controller:"catCtrl"
		})
	.when('/jenn',{
		templateUrl:"partials/jenn.html",
		controller:"jennController"
		})
	.when('/shug',{
		templateUrl:"partials/shug.html",
		controller:"shugController"
		})
	.otherwise({
		redirect:"/"
	});
});
