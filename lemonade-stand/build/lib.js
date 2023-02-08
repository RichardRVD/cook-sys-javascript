"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateOrderTotal = exports.calculateLemonadePrice = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var calculateLemonadePrice = function calculateLemonadePrice(lemonade) {
  var result = .75;
  for (var key in lemonade) {
    switch (key) {
      case "lemonJuice":
        result += lemonade[key] * .3;
        break;
      case "water":
        result += lemonade[key] * .01;
        break;
      case "sugar":
        result += lemonade[key] * .2;
        break;
      case "iceCubes":
        result += lemonade[key] * .05;
        break;
      default:
        break;
    }
  }
  return result;
};
exports.calculateLemonadePrice = calculateLemonadePrice;
var calculateOrderTotal = function calculateOrderTotal(_ref) {
  var lemonades = _ref.lemonades;
  var result = 0;
  var _iterator = _createForOfIteratorHelper(lemonades),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var lemonade = _step.value;
      result += lemonade.price;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
};
exports.calculateOrderTotal = calculateOrderTotal;