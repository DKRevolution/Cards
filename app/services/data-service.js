
module.factory("cardDataservice", [ '$http', '$q', function($http, $q){
	var factory = {};

    factory.getCardData = function (){
	  	console.log("Inside service");
	  	var defferred = $q.defer();
	  	var url = '../../json/food-data.json';
		  	$http.get(url).success(function(response){
		  		defferred.resolve(response);
		  	}, function(error){
		  		defferred.reject(error);
		  	});
		  	return defferred.promise;
	  }
	return factory;   

}]);