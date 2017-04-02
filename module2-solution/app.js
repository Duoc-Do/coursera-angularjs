! function() {
	"use strict";

	function t(t) {
		var e = this;
		e.items = t.getItems(), e.addItem = function(n, o) {
			try {
				t.addItem(n, o)
			} catch (i) {
				e.errorMessage = i.message
			}
		}
	}

	function e(t, e) {
		t.items = r, r.length <= 0 && (t.errorMessage = "Nothing bought yet")
	}

	function n(t) {
		var e = this,
			n = i;
		e.addItem = function(t) {
			if (1 == i.length) throw r.push(n[t]), n.splice(t, 1), new Error("Everything is bought!");
			r.push(n[t]), n.splice(t, 1)
		}, e.getItems = function() {
			return n
		}
	}

	function o() {
		var t = this;
		t.defaults = {
			minItems: 4
		}, t.$get = function() {
			var e = new n(t.defaults);
			return e
		}
	}
	var i = [{
			quantity: "10",
			name: "Cookies"
		}, {
			quantity: "20",
			name: "Chocolate"
		}, {
			quantity: "10",
			name: "Milks"
		}, {
			quantity: "200",
			name: "Banh Mi"
		}, {
			quantity: "10",
			name: "Peanut Butter"
		}, {
			quantity: "20",
			name: "Pepto Bisol (Cookie flavor)"
		}, {
			quantity: "40",
			name: "Pepto Bismol"
		}, {
			quantity: "250",
			name: "Pepto Bismol (Chocolate flavor)"
		}],
		r = [];
	angular.module("ShoppingListCheckOff", []).controller("ToBuyController", t).controller("AlreadyBoughtController", e).provider("ShoppingListProvider", o), t.$inject = ["ShoppingListProvider"], e.$inject = ["$scope", "ShoppingListProvider"]
}();