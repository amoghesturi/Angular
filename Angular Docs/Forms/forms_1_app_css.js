var app = angular.module('FormsApp', []);

app.controller('ExampleController', ['$scope', function($scope) {
	$scope.master = {};
	
	$scope.resetChanges = function() {
		$scope.user = angular.copy($scope.master);
	}
	
	$scope.updateChanges = function(user) {
		$scope.master = angular.copy(user);
	}
	
	$scope.resetChanges();
	
}]);