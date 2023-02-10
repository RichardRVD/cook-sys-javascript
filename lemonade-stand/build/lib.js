"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFileSync = exports.updateOrderTotal = exports.readAllFiles = exports.map = exports.createLemonade = exports.buildQuestionArray = exports.addLemonadeToOrder = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = require("path");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

//Transducer: transformer => reducer => reducer
var map = function map(f) {
  return function (reducer) {
    return function (acc, curr, idx, arr) {
      return reducer(acc, f(curr, idx), idx, arr);
    };
  };
};
exports.map = map;
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
var calculateOrderTotal = function calculateOrderTotal(lemonades) {
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
var writeFileSync = function writeFileSync(fileName, order) {
  _fs["default"].writeFileSync(fileName, JSON.stringify(order));
};
exports.writeFileSync = writeFileSync;
var readAllFiles = function readAllFiles(dirName) {
  var orders = [];
  var _iterator2 = _createForOfIteratorHelper(_fs["default"].readdirSync(dirName)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var name = _step2.value;
      orders.push(JSON.parse(_fs["default"].readFileSync(dirName + '/' + name)));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return orders;
};
exports.readAllFiles = readAllFiles;
var buildQuestionArray = function buildQuestionArray(val, i) {
  return [{
    type: 'number',
    name: "lemonJuice".concat(i + 1),
    message: "How many cups of lemon juice do you want in lemonade ".concat(i + 1, "?")
  }, {
    type: 'number',
    name: "water".concat(i + 1),
    message: "How many cups of water do you want in lemonade ".concat(i + 1, "?")
  }, {
    type: 'number',
    name: "sugar".concat(i + 1),
    message: "How many cups of sugar do you want in lemonade ".concat(i + 1, "?")
  }, {
    type: 'number',
    name: "iceCubes".concat(i + 1),
    message: "How many ice cubes do you want in lemonade ".concat(i + 1, "?")
  }];
};
exports.buildQuestionArray = buildQuestionArray;
var createLemonade = curry(function (response, curr, i) {
  return {
    lemonJuice: Number.parseInt(response['lemonJuice' + (i + 1)]),
    water: Number.parseInt(response['water' + (i + 1)]),
    sugar: Number.parseInt(response['sugar' + (i + 1)]),
    iceCubes: Number.parseInt(response['iceCubes' + (i + 1)])
  };
});
exports.createLemonade = createLemonade;
var addLemonadeToOrder = function addLemonadeToOrder(acc, curr) {
  return _objectSpread(_objectSpread({}, acc), {}, {
    lemonades: [].concat(_toConsumableArray(acc.lemonades), [_objectSpread(_objectSpread({}, curr), {}, {
      price: calculateLemonadePrice(curr)
    })])
  });
};
exports.addLemonadeToOrder = addLemonadeToOrder;
var updateOrderTotal = function updateOrderTotal(order) {
  return _objectSpread(_objectSpread({}, order), {}, {
    total: calculateOrderTotal(order.lemonades)
  });
};
exports.updateOrderTotal = updateOrderTotal;