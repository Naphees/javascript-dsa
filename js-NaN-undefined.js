// Date 14 - 8 -2026
// Topic - NaN And Undefined

console.log(undefined == null);// true
console.log(undefined === null) ;// false
console.log(typeof null); // object
console.log(typeof undefined);// "undefined"
console.log(Number.isNaN(NaN));// true
console.log(Number.isNaN("Hello"));// false
console.log(10 + undefined);// NaN
console.log(10 + null);// 10 "because  null  is converted to 0 in this numeric operation"