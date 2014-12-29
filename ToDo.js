var StorageDemo = angular.module('StorageDemo', ['ngStorage']);

StorageDemo.controller("todoStorage", function($scope, $localStorage) {

	$scope.saveInput = function() {
	 $locaStorage.todosSave = $scope.todos;
	};

	$scope.loadInput = function() {
		$scope.todos = $localStorage.todosSave;
	};

});
