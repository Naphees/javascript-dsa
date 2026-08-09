// Date  - 9 / 8/ 2026
// Topic - Regular Expression. 
// - It is a pattern used to search , match , validate, or replace text.

// 1.  Method create regular expression
const pattern = /hello/;

// 2.  Method   RegExp constructor
const pattern2 = new RegExp("hello");

// 3. test() Method  - checks whether a pattern exists in a string. 
//   - It returns true or false.

console.log(pattern.test("Hello"));// return  false - Because RegExp is case-sensitive  by default
console.log(`i flag practice`);
const pattern3 = /hello/i;
// Here i means case-insensitive
console.log(pattern3.test("heLlo is helldfe")); // return true


//  Now , What is g ?
// - g means global

console.log(`g flag practice`);
console.log("without g");

const reg = /cat/;
console.log(reg.test("cat dog cat"));
// with  g flag
const regG = /cat/g;
console.log(`with g also true`);
console.log(regG.test("cat dog cat"));

// Important point

// -For test(), adding g is usually not useful when you're simply checking whether a pattern exists.

// - The g flag becomes much more important with methods such as match() and replace():

// g flag with match method


const text = "cat  dog  cat  cat";
console.log(`string :${text}`);
console.log(`match fuction with g flag`);
console.log(text.match(/cat/g));
console.log(text.match(/cat/));// without g

//  Now, Practice with replace method
console.log(`Original String ${text}`);
console.log(`without g, replace method`);

let result = text.replace(/cat/, "dog");
console.log(result);

console.log(`with g , replace method`);
result = text.replace(/cat/g,"dog");
console.log(result);

