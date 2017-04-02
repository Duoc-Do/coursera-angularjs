! function() {
	"use strict";

	function t(t) {
		var e = this;
		e.items = t.getItems(), e.addItem = function(n, i) {
			try {
				t.addItem(n, i)
			} catch (r) {
				e.errorMessage = r.message
			}
		}
	}

	function e(t, e) {
		t.items = o, o.length <= 0 && (t.errorMessage = "Nothing bought yet")
	}

	function n(t) {
		var e = this,
			n = r;
		e.addItem = function(t) {
			if (1 == r.length) throw o.push(n[t]), n.splice(t, 1), new Error("Everything is bought!");
			o.push(n[t]), n.splice(t, 1)
		}, e.getItems = function() {
			return n
		}
	}

	function i() {
		var t = this;
		t.defaults = {
			minItems: 4
		}, t.$get = function() {
			var e = new n(t.defaults);
			return e
		}
	}
	var r = [{
			quantity: "10",
			name: "Cookies"
		}, {
			quantity: "20",
			name: "Chocolate"
		}, {
			quantity: "10",
			name: "Milks"
		}, {
			quantity: "50",
			name: "Peanut Butter"
		}],
		o = [];
	angular.module("ShoppingListCheckOff", []).controller("ToBuyController", t).controller("AlreadyBoughtController", e).provider("ShoppingListProvider", i), t.$inject = ["ShoppingListProvider"], e.$inject = ["$scope", "ShoppingListProvider"]
}();