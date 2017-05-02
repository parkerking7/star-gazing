var app = angular.module("apiApp");

app.controller("HomeController", ["$scope", "weatherService", "geolocation", function ($scope, weatherService, geolocation) {

geolocation.getLocation().then(function(data){
	$scope.dataObj = {latitude:data.coords.latitude, longitude:data.coords.longitude}
		var latitude = $scope.dataObj.latitude;
		var longitude = $scope.dataObj.longitude;
		weatherService.getWeather(latitude, longitude).then(function (response) {
			var response = response.data
			var rain = response.daily.data[0].precipProbability;
			rain = Math.floor(rain * 100);
			var clouds = response.currently.cloudCover;
			clouds = Math.floor(clouds * 100);
			$scope.weatherResponse = weatherService.shouldGo(rain, clouds)

		})



	})


}])
