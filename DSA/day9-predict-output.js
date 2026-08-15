// date : 15 - 8 - 2026
// topic : Coerion 

console.log("10" +5);// 105
console.log("10" - 5); // 5
console.log(2 * "10");// 20
console.log(5 == "5"); // true
console.log("5" === 5); // false
console.log(Boolean(""));// false
console.log(Boolean("hello"));// true
console.log(Boolean(0));// false
console.log(Boolean([]));// true
console.log((1234567.89).toLocaleString("en-IN"));// 12,344,567.89
console.log((1500).toLocaleString("en-In",{
    style:"currency",
    currency:"INR"
}));// ₹1,500.00