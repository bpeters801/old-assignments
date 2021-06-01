var readline = require('readline-sync');

var calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = this.op;

    if (op === "+") {
      var result = x + y;
    } else if (op === "-") {
      var result = x - y;
    } else if (op === "/") {
      var result = x / y;
    } else if (op === "*") {
      var result = x * y;
    } else {
      var result = "Error!"
    }

    console.log("Result: " + result);
  };
}

var num1 = readline.question("Please enter your first number: ");
var num2 = readline.question("Please enter your second number: ");
var op = readline.question("Please enter an operation to preform: add,sub, mul, or, divide ");

var calc = new calculation(num1, num2, op);

calc.result();
