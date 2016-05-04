

var app1 = angular.module('MainApp1',['MainApp']);
app1.controller('MainCtr1', ['$scope', function($scope){
	 $scope.sliderValue = 50;
}]);
