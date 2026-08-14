// Date : 14.8.2026
// Topic : toString();
// - toString() is used to convert a value into a string

{
    let x = 123;//
    console.log(typeof x); // Numbrer
    console.log(x.toString());// "123"
    console.log( typeof x.toString()); // "String"
    console.log(x.toString(2));// "1111011"
    console.log(x.toString(16));// "7b"
    const fruits = ["Banana","Orange","Apple"];
    console.log(typeof fruits);// ojbect

    console.log(Array.isArray(fruits));// true
    console.log(fruits)// print all fruits  in array
    console.log(fruits.toString())// print all fruits in string

    function add(a,b){
        return a + b;
    }
    console.log(add()); // NaN
    console.log(add.toString());// return add function body
    console.log(add(10, 20).toString());// return 30

    // object
    const person  = {
        firstName:"Naphees",
        lastName:"Mern Stack Developer"
    };
    console.log(person.toString());// return [object  object]
    console.log(String(person)); // return [object object]


    // So String() can be safer when the value might be null or undefined.
    console.log(String(null));// "null"
    console.log(String(undefined));// "undefined"

    // but 
   // console.log(null.toString());// X TypeError
   // console.log(undefined.toString());// X TypeError
}