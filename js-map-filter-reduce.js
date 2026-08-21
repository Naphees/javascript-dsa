// 1. map() - Transform every element
// - map() is used when you want to create a 
// - new array by changing every element.

{
    console.log(`map() example :`);
    const numbers = [1,2,3,4];
    const result = numbers.map((num)=> num ** 2);
    console.log(`Original Array ${numbers}`);
    console.log(`Square of each elements : ${result}`);
}


// 2. filter() - Select elements
//  - filter() is used when you want to select elements that satisfy a condition
{
 console.log(`filter() example`);
 const numbers = [1,2,3,4,5,6];
 const result = numbers.filter((num)=> num %2 === 0);
 console.log(`Original Array : ${numbers}`);
 console.log(`All Even elements ${result}`);

 const greaterThree = numbers.filter((num)=> num > 3);
 console.log(`All elements Greater Than 3 : ${greaterThree}`);
}

// 3. reduce() Combine elements
// - reduce() is used when you want to reduce an array to a
// - single result
{
    const numbers = [1,2,3,4,5];
    const sum = numbers.reduce((total,num) => total + num,0);
    console.log(`Original Array : ${numbers}`);
    console.log(`Array Sum : ${sum}`);
}