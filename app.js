var app = angular.module("apiApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider
		.when("/home", {
			templateUrl: "home/home.html",
			controller: "HomeController"
		})
		.when("/weather", {
			templateUrl: "weather/weather.html",
			controller: "WeatherController"
		})
	.when("/stars", {
			templateUrl: "stars/stars.html",
			controller: "StarController"
		})
		.otherwise({
			redirectTo: "/home"
		});
}])

