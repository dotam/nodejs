var app = angular.module('MainApp',[]);
app.directive('tamSlider',[function(){
	return{
		restrict: 'AE',
		scope: {
			'model': '='
		},
		link: function(scope,elem,attrs){
			$(elem).slider({
				value: +scope.model,
				slide: function(event, ui){
					scope.$apply(function(){
						scope.model = ui.value;
					});
				}
			});
			scope.$watch('model', function(newVal){
				$(elem).slider('value',newVal);
			});
		}
	};
}])