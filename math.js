// Date : 8-8-2026
// Topic - Math

// Math Object
// - Math is a built-in JavaScript object used for mathematical calculations.

// Return Pi value
console.log(Math.PI);// return PI value

// 1. Math.round() - Rounds to nearest integer
console.log(Math.round(4.6));// nearest integer  5
console.log(Math.round(4.3));// nearest integer 4

// 2. Math.floor() - Rounds downward.
  console.log(Math.floor(4.9));// return // 4

  // 3. Math.ceil() - Rounds upward
  console.log(Math.ceil(4.1));// return 5

  // 4. Math.trunc() - Remove the decimal part.
  console.log(Math.trunc(44.4));// return 44

// 5. Math.abc() - Returns the positive value
console.log(Math.abs(-44.4)); // returns 44.4

// 6. Math.max() - Returns the largest number
console.log(Math.max(10,39,44,44.4));// returns 44.4

//  7. Math.min() - Returns the smallest number
console.log(Math.min(-2,44,-30));// returns smallest number

// 8. Math.pow() - Returns the power calculation
console.log(Math.pow(2,3));// returns  8
// We can also use:
 console.log(2 ** 3);// returns 8

 // 9. Math.random() -  It produces a number from 0 <= number < 1
 console.log(Math.random());

 // Some more usefull 
 const randomNumber = Math.floor(Math.random() * 10 ) + 1;
 console.log(randomNumber);

