
gxMainApp.factory("homeService", function($rootScope, $http, $q, $window, gxAPIServiceWrapper) {

	var _organizations = [];
	var _WeatherReport = []; 
    var serverUrl = 'http://api.openweathermap.org/data/2.5/weather?';  
    var appid = '44db6a862fba0b067b1930da0d769e98';

	/**
	 * @Function to get weather report with geographical coordinates through Open Weather API
	 *           service.
	 */
	var _getWeatherReport = function(coordinates, scope) {
		var weatherUrl = serverUrl +'lat='+ coordinates.lat +'&lon='+ coordinates.lon +'&appid=' + appid;
 
		var result = gxAPIServiceWrapper.get(weatherUrl);
		scope.weatherReport={}; 
		result.then(function(data) {	 	
			scope.weatherReport=_WeatherReport=data;   
			scope.showWeatherReport=true;   	  
		});
	   
	}    

   	/**
	 * @Function to get weather report with postal code and country code through Open Weather API
	 *           service.
	 */
	var _getWeatherReportByPostalCode = function(postalcode, countrycode, scope) {
		var weatherUrl = serverUrl +'zip='+ postalcode +'.'+ countrycode +'&appid=' + appid;
 
		var result = gxAPIServiceWrapper.get(weatherUrl);
		scope.weatherReport={}; 
		result.then(function(data) {	 
		    if(!data.hasOwnProperty('coord'))
		     alert("Please enter valid data");
		     else
            {
   			scope.weatherReport=_WeatherReport=data;    
			scope.showWeatherReport=true;   	  
		    }
		});
	   
	}   

   	/**
	 * @Function to get geographical coordinates using the window.navigator property
	 */
	var  _getCurrentPosition = function() {
        var deferred = $q.defer();

        if (!$window.navigator.geolocation) {
            deferred.reject('Geolocation not supported.');
        } else {
            $window.navigator.geolocation.getCurrentPosition(
                function (position) {
                    deferred.resolve(position);
                },
                function (err) {
                    deferred.reject(err);
                });
        }

        return deferred.promise;
    }
	
	return {   
		getWeatherReport : _getWeatherReport, 
		getWeatherReportByPostalCode : _getWeatherReportByPostalCode,
	    getCurrentPosition : _getCurrentPosition
	};

});