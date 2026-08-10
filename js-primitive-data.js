// Date : 10 - 8 - 2026
// Topic - JavaScript Primitive Data Type

console.log(`Primitive Data Type`);

// Number
let  x = 10; // number
console.log(`${x} is ${typeof x}`);
x  = -10;
console.log(`${x} is ${typeof x}`);

x = 5.5;
console.log(`${x} is ${typeof x}`);

// BigInt
 x = 1234567890123456789012345n;
 let y = BigInt(1234567890123456789012345);
 console.log(`${x} is ${typeof x}`);
 console.log(`${y} is ${typeof y}`);

 // Strings
 x = "yellow";
 y = `green`;
 let z = 'pink';

 console.log(`${x} is ${typeof x}`);
 console.log(`${y} is ${typeof y}`);
 console.log(`${z} is ${typeof z}`);

 // Boolean
 x = true;
 y = false;
 console.log(`${x} is ${typeof x}`);
 console.log(`${y} is ${typeof y}`);


 // Undefined
 let xx;
 let yy;
 
 console.log(`${xx} is ${typeof xx}`);
 console.log(`${yy} is ${typeof yy}`);


 // Null
 x = null;
 y = null;

 console.log(`${x} is ${typeof x}`);
 console.log(`${y} is ${typeof y}`);

// Symbol
x = Symbol();
y = Symbol();

console.log(` ${typeof x}`);
 console.log(` ${typeof y}`);

 
