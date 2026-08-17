// Date : 17 - 8 - 2026
// Topic : Array Problems

// Q.1. Find the missing number
// - - Given an array containing n distinct numbers taken
//  from the range 0 to n, find the one missing number.

// const arr = [3,0,1,4]; 

{
    const arr = [3,0,1,4];
    let maxElement = arr[0];
    let minElement = arr[0];
    const dummyArray =[];
    let findElement;
    for(let x of arr){
        if(x > maxElement){
            maxElement = x;
        }
        else if(x < minElement){
            minElement =x;
        }
    }
    console.log(maxElement);
    console.log(minElement);
    for(let x = minElement; x < maxElement; x++){
        dummyArray.push(x);
    }
    console.log(dummyArray);
    for(let x of dummyArray){
        if(!arr.includes(x)){
            findElement = x;
            break;
        }
    }
    console.log(`Missing Element is : ${findElement}`);
}
// Second solution
{
    const arr =[3,0,1,4];
    let expectedSum = 0 ;
    let sum =0;
    for(let x = 0; x <= arr.length ; x++){
        expectedSum += x;
    }
    for(let x of arr){
        sum += x;
    }
   
    console.log(`Find Element :${expectedSum -sum}`);

}
// Third solution
{
    const arr =[ 3,0,1,4];
    let sum = 0;
    let expectedSum = arr.length *(arr.length +1) /2;
    for(let x of arr){
        sum +=x;
    }
    console.log(`Missing Element ${expectedSum - sum}`);
}