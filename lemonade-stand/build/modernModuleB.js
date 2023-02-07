"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.moduleBFunction = moduleBFunction;
exports.moduleBVariable2 = exports.moduleBVariable = void 0;
console.log("Running module b");
var moduleBVariable = "named variable from module b";
exports.moduleBVariable = moduleBVariable;
var moduleBVariable2 = 50;
exports.moduleBVariable2 = moduleBVariable2;
function moduleBFunction() {
  console.log("Running from module b");
}
var _default = {
  a: moduleBVariable,
  b: moduleBVariable2,
  c: moduleBFunction
};
exports["default"] = _default;
console.log("Finish running module b");