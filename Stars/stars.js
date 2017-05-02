var app = angular.module("apiApp");

app.controller("StarController", ["$scope", "weatherService", "$sce", function ($scope, weatherService, $sce) {

	weatherService.getLocation().then(function (response) {
		var response = response.data;
		$scope.latitude = response.latitude;
		$scope.longitude = response.longitude;
		$scope.skyUrl = $sce.trustAsResourceUrl("https://www.google.com/sky/#latitude=" + $scope.latitude + "&longitude=" + $scope.longitude + "&zoom=12&Spitzer=0.00&ChandraXO=0.00&Galex=0.00&IRAS=0.00&WMAP=0.00&Cassini=0.00&slide=16&mI=1&oI=2");
	})

}])

