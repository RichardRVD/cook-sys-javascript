"use strict";

var _vorpal = _interopRequireDefault(require("vorpal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const order = {
//     total: 5.00,
//     lemonades: [
//         {
//         lemonJuice: 4,
//         water: 2,
//         sugar: 3,
//         iceCubes: 7,
//         price: 5
//     },
//         {
//         lemonJuice: 2,
//         water: 2,
//         sugar: 1,
//         iceCubes: 7,
//         price: 3
//     },
//         {
//         lemonJuice: 3,
//         water: 2,
//         sugar: 0.5,
//         iceCubes: 7,
//         price: 4.38
//     },
//         {
//         lemonJuice: 4,
//         water: 2.14,
//         sugar: 1.25,
//         iceCubes:7,
//         price: 2.49
//     },
// ],
//     lemonadeStand:{
//         name: "Cooksys Lemonade Stand"
//     },
//     Customer:{
//         name: "Ricky",
//         phoneNumber: "9999999999"
//     }, 
// }

var vorpal = (0, _vorpal["default"])();
vorpal.command('hello <name> [number]', 'Prints hello <name> to the console').option('-f --file', 'Provide a file name').action(function (args, callback) {
  if (args.options.file) {
    this.log('I see you want to make a file.');
  }
  this.log("Hello ".concat(args.name, ", should I call you at ").concat(args.number));
  callback();
});
vorpal.command('createOrder <name> <phoneNumber>', 'Create an oder and saves it as a JSON file.').action(function (args, callback) {
  var _this = this;
  var order = {
    customer: {
      name: args.name,
      phoneNumber: args.phoneNumber
    },
    lemonadeStand: {
      name: "Rickys lemonade stand"
    }
  };

  // prompt the user for how many lemonades they want.
  this.prompt({
    type: 'number',
    name: 'numLemonades',
    "default": 1,
    message: "How many lemonades would you like to order?"
  }, function (response) {
    var lemonade = {};
    var questions = [];
    for (var i = 1; Number.parseInt(response.numLemonades); i++) {
      questions.push({
        type: 'number',
        name: 'lemonJuice' + i,
        message: "How many cups of lemon juice do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'water' + i,
        message: "How many cups of water do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'sugar' + i,
        message: "How many cups of sugar do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'iceCubes' + i,
        message: "How many ice cubes do you want in lemonade ".concat(i, "?")
      });
    }
    _this.prompt(questions, function (response) {
      _this.log(response);
      callback();
    });
  });
});
vorpal.delimiter('lemonade-stand$').show();