! function() {
	"use strict";

	function t(t, e) {
		t.name = "", t.message = "", t.result = "", t.btnCheck = function() {
			var e = t.getItems(t.name);
			0 === e.length ? (t.result = "Please enter data first!", t.customClass = "txt-red", t.borderStatus = "red-status") : e.length > 3 ? (t.result = "Too much!", t.customClass = "txt-green", t.borderStatus = "green-status") : (t.result = "Enjoy!", t.customClass = "txt-green", t.borderStatus = "green-status"), t.message = t.result
		}, t.getItems = function(t) {
			return "string" != typeof t || "" === t ? [] : t.split(",")
		}
	}
	angular.module("LunchCheck", []).controller("LunchCheckController", t), t.$inject = ["$scope", "$filter"]
}();