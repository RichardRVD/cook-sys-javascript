"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _vorpal = _interopRequireDefault(require("vorpal"));
var _lib = require("./lib");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var vorpal = (0, _vorpal["default"])();
vorpal.command('hello <name> [number]', 'Prints hello <name> to the console').option('-f --file', 'Provide a file name').action(function (args, callback) {
  if (args.options.file) {
    this.log('I see you want to make a file.');
  }
  this.log("Hello ".concat(args.name, ", should I call you at ").concat(args.number));
  callback();
});

// { lemonJuice0: '4', water0: '4', sugar0: '4', iceCubes0: '10', lemonJuice1: '4', water1: '4', sugar1: '1', iceCubes1: '10'} 
// => [{lemonJuice: 4, water: 4, sugar: 4, iceCubes: 10}, {lemonJuice: 4, water: 4, sugar: 4, iceCubes: 10}]

// split: (a: ([key: string, val: string])=> [string, string]) => [string, string, string]
var split = function split(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    val = _ref2[1];
  return [key.split(/(\d+)/), val];
}; //['lemonJuice' , '0', " "]

// parseNums: ([[key: 'lemonJuice', idx : string], val: string]) =>[string, number, number]
var parseNums = function parseNums(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    _ref4$ = _slicedToArray(_ref4[0], 2),
    key = _ref4$[0],
    idx = _ref4$[1],
    val = _ref4[1];
  return [key, Number.parseInt(idx), Number.parseInt(val)];
};
var createObjects = function createObjects(acc, _ref5) {
  var _ref6 = _slicedToArray(_ref5, 3),
    key = _ref6[0],
    idx = _ref6[1],
    val = _ref6[2];
  return acc[idx] ? (acc[idx][key] = val) && acc : [].concat(_toConsumableArray(acc), [_defineProperty({}, key, val)]);
};
parseNums(split(x));

// (...reducers) => reducer => reducer
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};
var makeLemonadeObjects = compose((0, _lib.map)(split), (0, _lib.map)(parseNums))(createObjects);
vorpal.command('createOrder <name> <phoneNumber>', 'Create an oder and saves it as a JSON file.').action(function (args) {
  var _this = this;
  return this.prompt({
    type: 'number',
    name: 'numLemonades',
    "default": 1,
    message: "How many lemonades would you like to order?"
  }).then(function (_ref8) {
    var numLemonades = _ref8.numLemonades;
    return _toConsumableArray(Array(Number.parseInt(numLemonades))).flatMap(_lib.buildQuestionArray);
  }).then(function (questions) {
    return _this.prompt(questions);
  }).then(function (response) {
    return Object.entries(response).reduce(makeLemonadeObjects, []);
  }) // [[key, idx, value], [key, idx, value]]
  .then(function (lemonades) {
    return _this.log(lemonades);
  });
  // .then(response => 
  //     updateOrderTotal(
  //         [...Array(Number.parseInt(numLemonades))].reduce(
  //             map(createLemonade(response))(addLemonadeToOrder), 
  //             {
  //                 total:0,
  //                 lemonades: [],
  //                 customer : {
  //                     name: args.name,
  //                     phoneNumber: args.phoneNumber
  //                 },
  //                 lemonadeStand: {
  //                     name: "Rickys lemonade stand"
  //                 }
  //             }
  //         )
  //     )
  // )
  //     .then(order => 
  //         writeFileSync(
  //             order.lemonadeStand.name + '/' + order.customer.name + '.json', 
  //     order
  //     )
  // )
});

vorpal.command('getOrders <lemonadeStand>', 'Get all orders for the given lemonade stand').action(function (_ref9, callback) {
  var lemonadeStand = _ref9.lemonadeStand;
  var orders = (0, _lib.readAllFiles)(lemonadeStand);
  this.log("There are ".concat(orders.length, " orders at ").concat(lemonadeStand));
  var _iterator = _createForOfIteratorHelper(orders),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var order = _step.value;
      this.log("Total Price: ".concat(order.total));
      this.log("Lemonades:");
      this.log(order.lemonades);
      this.log("Customer:");
      this.log(order.customer);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  callback();
});
vorpal.delimiter('lemonade-stand$').show();