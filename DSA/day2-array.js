// Date - 7 - 8-2026
// Topic  - Array
// Array
//  - An array is a data structure  used to store multiple values in a single variable.

// Example
const arr = [10,20,30,40 ,50];

// array index start from 0
console.log(arr[0]); // 10

// Important  Array Operations
// 1. Access  array element
   console.log(arr[3]);//  40

// 2. Update array element

arr[4] =110;
console.log(arr);

// 3. Add new element  in last

  arr.push(60);

console.log(arr);// now last element is 60

// 4. Remove last element  

  arr.pop();
  console.log(`remove 60 from array : ${arr}`);

// 5. Array length
console.log(`Array Length : ${arr.length}`);

// 6. Access all element by loop

console.log(`Access Array Element by loop`);
console.log(`Used for loop`);
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
}
console.log(` Used for...of loop `);
for(let i of arr){
    console.log(i);
}