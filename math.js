console.log("Hallo");

// Variables can change type depending on the value we assign to them:
let a = "Hallo";
console.log(typeof a);
a = 2;
console.log(typeof a);
a = true;
console.log(typeof a);

// Special number values
a = 14 / 0;
console.log(a); // => Infinity
console.log(typeof a); // => number

a = "c" * 14;
console.log(a); // => NaN (Not a Number)
console.log(typeof a); // => number

console.log(isNaN(a)); // => true
a = 3;
console.log(isNaN(a)); // => false

// Convert variables to number before doing math with them!
a = "5";
let b = "7";
let result = Number(a) + Number(b);
console.log(result);

// You can also convert numbers to strings like this:
a = 5;
b = 7;
result = a.toString() + b.toString();
console.log(result);

// There is no difference in type for integers and floating point numbers:
a = 3;
b = 1.3478;
console.log(typeof a); // => number
console.log(typeof b); // => number

// Numbers can be represented in various number systems (e.g. binary or hexadecimal)
a = 0b100101001;
console.log(a);
b = 0xab01ad;
console.log(b);

// You can get a string representation of a number in a specific number system by providing the base of the system to the toString() function
a = 12456;
console.log(a.toString());
console.log(a.toString(2));
console.log(a.toString(16));

// Basic math operators
a = 5;
b = 7;
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a - b);
console.log(a ** b);

// Modulo operator (remainder of a division)
a = 7;
b = 3;

console.log(a % b); // => 1

// Shorthand assignment operators
// a = a + 3;
a += 3;
console.log(a);
// a = a * 2;
a *= 2;
console.log(a);

// a = a + 1;
a++;
console.log(a);

a = 2;
b = 3;

// Use brackets to modify operator precedence
result = (a + 1) / (b + 3);
console.log(result);

// Math.random() returns a pseudo random number between 0 (including) and 1 (excluding)
a = Math.random();
console.log(a);
a = Math.random();
console.log(a);
a = Math.random();
console.log(a);
a = Math.random();
console.log(a);

// Function to generate random integers in a given range
function generateRandomInt(min, max) {
  let random = Math.random();
  random *= max - min;
  random = Math.floor(random);
  random = random + min;
  return random;
}

console.log(generateRandomInt(5, 10));
console.log(generateRandomInt(5, 10));
console.log(generateRandomInt(5, 10));
console.log(generateRandomInt(5, 10));
console.log(generateRandomInt(5, 10));
console.log(generateRandomInt(5, 10));

console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));
console.log(generateRandomInt(1, 50));

function decrease(number) {
  return number - 1;
}

// function call does not alter the input value
a = 7;
console.log(a);
console.log(decrease(a));
console.log(a);
b = decrease(a);
console.log(b);
