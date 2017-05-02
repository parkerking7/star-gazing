var app = angular.module("apiApp");

app.controller("StarController", ["$scope", "weatherService", "$sce", "geolocation", function ($scope, weatherService, $sce, geolocation) {

	geolocation.getLocation().then(function(data){
	$scope.dataObj = {latitude:data.coords.latitude, longitude:data.coords.longitude}
		 $scope.latitude = $scope.dataObj.latitude;
		 $scope.longitude = $scope.dataObj.longitude;
		$scope.skyUrl = $sce.trustAsResourceUrl("https://www.google.com/sky/#latitude=" + $scope.latitude + "&longitude=" + $scope.longitude + "&zoom=12&Spitzer=0.00&ChandraXO=0.00&Galex=0.00&IRAS=0.00&WMAP=0.00&Cassini=0.00&slide=16&mI=1&oI=2");
	})

}])

