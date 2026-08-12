// Date 12-8-2026
// Topic Object

// 1. Create an object called student with: name , age, course, isActive, Then print all four properties.

const student = {
    name:"naphees",
    age : 25,
    course:"mca",
    isActive:true
};
// print all element by loop
for(let x in student){
    console.log(student[x]);
}
// print Specific Elements
console.log(student.name );
console.log(student["course"]);

// Q.2 Find the type of these values using typeof:
console.log("Check Data type");
console.log(typeof("JavaScript"));
console.log(typeof(100));
console.log(typeof(true));
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof([10,20,30]));
console.log(typeof({name:"Naphees"}));

// Q.3  Create an array of 5 numbers and 
// - print the array
// - print the first element
// - print the last element
// - print the array length

{
    const arr = [10,20,30,40,50];
    // print array
    console.log(arr);
    // print first element
    console.log(arr[0]);
    // print last element
    console.log(arr[arr.length -1]);
    // print array length
    console.log(arr.length);
}

// Q.4 Create an object containing an array:
// - const student = {name : "Naphees",marks:[75,80,85,90]};
// print the second mark

{
    const student = {
        name:"Naphees",
        marks:[75,80,85,90]
    };
    console.log(student.marks[1]);
}