
var gxMainApp = angular.module("gxMainApp", ['ui.router','ngRoute','ngCookies',
                                             'ngAnimate','ui.bootstrap','ui']);

gxMainApp.factory('gxAPIServiceWrapper', function( $http, $q,$rootScope) { 
	
		function _makeRequest(verb, uri, data) {
			var defer = $q.defer();
			verb = verb.toLowerCase();

          
			//start with the uri
			var httpArgs = [uri];
			if(verb.match(/delete/)){
				if(data){
					var objData = data;
					httpArgs.push( data );
				}
				$http({method:'DELETE',url:uri,data:objData,headers:{'Content-Type': 'application/json', 'Accept':'application/json'}})
				.success(function(data, status){
					if(status == '200' && data=='') {
						data = $rootScope.CONSTANT_SUCCESS;
					}
					defer.resolve(data); 
				})
				.error(function(data, status){
					console.log('delete error');
					defer.resolve('HTTP Error: ' + status);
					return ('HTTP Error' + status);
				}); 			
			}
			else {
				
				if (verb.match(/post|put/)){
					httpArgs.push( data );
				}	
				
				$http[verb].apply(null, httpArgs)
				.success(function(data, status){
					if(status == '200' && data=='') {
						data = $rootScope.CONSTANT_SUCCESS;
					}
					defer.resolve(data); 
				})
				.error(function(data, status){
					defer.resolve('HTTP Error: ' + status);
					return ('HTTP Error' + status);
				});
			}
			
			
			return defer.promise;
		}
		 
		return {
			get: function( uri ) {
				return _makeRequest( 'get', uri );
			}
			,post: function( uri, data ){
				return _makeRequest( 'post', uri, data );
			}
			,put: function( uri, data ){
				return _makeRequest( 'put', uri, data );
			}
			,delete: function( uri,data ){
				return _makeRequest( 'delete', uri ,data);
			}
		};
 
});
 

//for routing the application
gxMainApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.
		state('home',{ 
			url:'/Home',
			templateUrl:'../views/home/home.html',
			controller:'homeController' 
		}) ; 
		$urlRouterProvider.otherwise('/Home');
}]);
