// date 6-8-2026
// loop  for...in , 

// A javascript for... in  statement
// loops through the properties of a person object


// example
const person = {
     firstName:"Naphees",
     lastName:"Rathour",
     course:"MCA"
    
};

 console.log(`Object element print by for ... in loop`);
// print all element of object
for(let x  in person){
    console.log(x);
}


// The for...of loop
// The for...of loop iterates over the values of iterable
// objects such as arrays, strings, Maps,Sets, and NodeLists.

// example

const x = "Hello Dear";
for(let i of x){
    console.log(i);
}