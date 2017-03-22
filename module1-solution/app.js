! function() {
	"use strict";

	function e(e, t) {
		e.name = "", e.message = "", e.result = "", e.btnCheck = function() {
			var t = e.getItems(e.name);
			0 === t.length ? (e.result = "Please enter data first", document.getElementById("txtResult").style.color = "#ff2400", document.getElementById("txtName").style.borderColor = "#ff2400") : t.length > 3 ? (e.result = "Too much!", document.getElementById("txtResult").style.color = "#05b626", document.getElementById("txtName").style.borderColor = "#05b626") : (e.result = "Enjoy", document.getElementById("txtResult").style.color = "#05b626", document.getElementById("txtName").style.borderColor = "#05b626"), e.message = e.result
		}, e.getItems = function(e) {
			return "string" != typeof e || "" === e ? [] : e.split(",")
		}
	}
	angular.module("LunchCheck", []).controller("LunchCheckController", e), e.$inject = ["$scope", "$filter"]
}();