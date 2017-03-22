(function() {
	'use strict';
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope', '$filter'];

	function LunchCheckController($scope, $filter) {
		$scope.name = "";
		$scope.message = "";
		$scope.result = "";
		$scope.btnCheck = function() {
			var items = $scope.getItems($scope.name);
			if (items.length === 0) {
				$scope.result = "Please enter data first";
				document.getElementById('txtResult').style.color = '#ff2400';
				document.getElementById('txtName').style.borderColor = '#ff2400';
			} else if (items.length > 3) {
				$scope.result = "Too much!";
				document.getElementById('txtResult').style.color = '#05b626';
				document.getElementById('txtName').style.borderColor = '#05b626';
			} else {
				$scope.result = "Enjoy";
				document.getElementById('txtResult').style.color = '#05b626';
				document.getElementById('txtName').style.borderColor = '#05b626';
			};
			$scope.message = $scope.result;
		}
		$scope.getItems = function(item) {
			if (typeof item !== "string" || item === "") {
				return [];
			}
			return item.split(",");
		}
	}
})();