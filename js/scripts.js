// this is the add function
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

// this is the BMI function

var bmi = function(number1, number2) {
 return (number1 / (number2**2)) * 703;
};

 var number1 = parseInt(prompt("Enter weight in pounds:"));
 var number2 = parseInt(prompt("Enter height in inches:"));
 var result = bmi(number1, number2);
 alert(result);

//celsius to fahrenheit

 var far = function(number1) {
 	return (number1 +32) *(5/9)
 };

 var number1 = parseFloat(prompt("enter temp. in celcius:"));
 var result = far(number1);
 alert(result);

// fahrenheit to celsius

 var cel = function(number1) {
	return (number1 -32) *(5/9)
};

var number1 = parseFloat(prompt("enter temp. in fahrenheit:"));
var result = cel(number1);
alert(result);


// gallon to liter

var gall = function(number1) {
	return (number1 * 3.78541)
};

var number1 = parseFloat(prompt("enter number, in gallons:"));
var result = gall(number1);
alert(result);

// liquid gallons to liquid liter

var gall = function(number1) {
	return (number1 * 3.78541)
};

var number1 = parseFloat(prompt("enter number, in Liquid gallons:"));
var result = gall(number1);
alert(result);

// dry gallons to dry liter

var gall = function(number1) {
	return (number1 / 0.22702)
};

var number1 = parseFloat(prompt("enter number, in Dry gallons:"));
var result = gall(number1);
alert(result);

// dry liter to gallons

var lit = function(number1) {
	return (3.78541 / number1 )
};

var number1 = parseFloat(prompt("enter number, in Dry liters:"));
var result = lit(number1);
alert(result);

// liquid liters to gallons


var lit = function(number1) {
	return (3.78541 / number1 )
};

var number1 = parseFloat(prompt("enter number, in liquid liters:"));
var result = lit(number1);
alert(result);


// dry liters to gallons

var lit = function(number1) {
	return (0.22702 * number1 )
};

var number1 = parseFloat(prompt("enter number, dry liters:"));
var result = lit(number1);
alert(result);
