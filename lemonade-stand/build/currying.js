"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var add = function add(a, b) {
  return a + b;
};
var curry = function curry(f) {
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return function (a) {
      return a.length === f.length ? f.apply(void 0, _toConsumableArray(a)) : curry(f, a);
    }([].concat(_toConsumableArray(arr), args));
  };
};
var curriedAdd = curry(add);
console.log(curriedAdd(1, 2));
function addition(a, b) {
  return a + b;
}
function addShowCurry(a) {
  return function (b) {
    return a + b;
  };
}
var increment = addShowCurry(1);
var add5 = addShowCurry(5);
console.log(addition(1, 2));
console.log(addShowCurry(1)(2));
console.log(increment(10));
console.log(add5(20));

// rest parameters
var f = function f(num) {
  for (var _len2 = arguments.length, a = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    a[_key2 - 1] = arguments[_key2];
  }
  return console.log(a);
};
f(10, 20, 30, 40, 'Hello', true, [1, 2, 3], {
  a: 'Bye',
  b: 'Hi'
});

//Spread args into a function
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
f.apply(void 0, b);