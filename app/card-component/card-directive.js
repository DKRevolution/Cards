module.directive('cardComponent', function () {
    return { 
    	restrict: 'AE',
    	scope:{
    		food: '=cardData'
    	},
    	templateUrl: '../../card-component/card-component.html',
        link: function (scope, el, attr) {
		   
        }
    };
})