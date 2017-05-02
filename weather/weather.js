var app = angular.module("apiApp");

app.controller("WeatherController", ["$scope", "weatherService","geolocation", function ($scope, weatherService, geolocation) {

	$scope.week = [];
	$scope.weekday = []
	geolocation.getLocation().then(function(data){
	$scope.dataObj = {latitude:data.coords.latitude, longitude:data.coords.longitude}
		var latitude = $scope.dataObj.latitude;
		var longitude = $scope.dataObj.longitude;
		weatherService.getWeather(latitude, longitude).then(function (response) {
			var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			
			var today = new Date().getDay();
			var response = response.data;
			var days = response.daily.data
			for (var i = 0; i < days.length; i++) {
				days[i].day = weekdays[today];
//				$scope.week.push(days[i]);
				if (today < 6) {
					today++
				} else {
					today = 0
				}

			}
			$scope.week = days;
			

		})
	})
	


}])

app.filter('percentage', ['$filter', function ($filter) {
	return function (input, decimals) {
		return $filter('number')(input * 100, decimals) + '%';
	};
}]);
