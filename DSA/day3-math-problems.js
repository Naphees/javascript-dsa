// Math problems
// Q.1 Round 7.8
console.log(Math.round(7.2));// returns 7

// Q.2 Round 7.2 downward
console.log(Math.floor(7.2)); // returns 7

// Q.3. Round 7.2 upward
console.log(Math.ceil(7.2)); // returns 8

// Q.4 Find the absolute value of -50.
console.log(Math.abs(-50)); // returns 50

// Q.5 Find the maximam of : 10,25,8,40,15
console.log(Math.max(10,25,8,40,15)); // returns 40

// Q.6 Find the minimum  of : 10,25,8,40 ,15
console.log(Math.min(10,25,8,40,15));// returns 8

// Q.7 Find Calculate 5 power 3.
console.log(Math.pow(5,3));// return 125

// Q.8 Generate a random number between 1 and 100.
const genNumber = Math.floor(Math.random() * 100) +1;
console.log(genNumber);

// Q.8 Generate an otp between  1000  to 9999  . otp should  have 4 digits
const otp = Math.floor(Math.random() * (9999 -1000 + 1)) + 1000;
console.log(otp);