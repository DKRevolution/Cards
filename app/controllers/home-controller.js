module.controller("homeCtrl", [ '$scope', 'cardDataservice', function($scope, cardDataservice){
	 cardDataservice.getCardData().then(function(resonse){
	 	$scope.foodItems = resonse; 
	 });
}]);
  
