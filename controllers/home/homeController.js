
gxMainApp.controller("homeController", function ($scope, $rootScope, $state, homeService, $cookieStore ) {
	   $scope.showWeatherReport = false;
	   $scope.coordinates = {
	   	  "lat" : "",
	   	  "lon" : ""
	   };

	   	/**
	 * @Function to trigger call to weather report API with geaographical coordinates 
	 */
	     homeService.getCurrentPosition().then(function(data) {	
		     $scope.coordinates.lat = data.coords.latitude; $scope.coordinates.lon = data.coords.longitude;	 
		     homeService.getWeatherReport($scope.coordinates, $scope);
		});

       	/**
	 * @Function to trigger call to weather report API with postal code and country code 
	 */  
	    $scope.getWeatherByPostalCode = function() {
             homeService.getWeatherReportByPostalCode($scope.postalcode, $scope.countrycode, $scope); 
	    }; 
});
