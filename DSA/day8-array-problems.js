// Date : 14 - 8 -2026
// Topic - Array Problems

// Q.1 Move all zeros to end
//  - const arr = [10,2,3,0,0,5,0,6];
// result  [10,2,3,5,6,0,0,0];

{
    const arr = [10,2,3,0,0,5,0,6];
    const arr1 = []; // store 0
    const arr2 = []; // store number !== 0
    for(let x of arr){
        if(x === 0){
            arr1.push(x);
            continue;
        }
        arr2.push(x);
    }
    console.log(`Real Array : ${arr} \n Zeros Elements : ${arr1} \n Not Zeros Elements : ${arr2}`);
    arr.length = 0;
    console.log(arr);
    //arr.concat(arr2);

    //arr.push(...arr2);
    for(let x of arr2){
        arr.push(x);
    }
     for(let x  of arr1){
        arr.push(x);
     }
    console.log(arr);
}

// Second Approach
{
    const arr = [10,2,3,0,0,5,0,6];
    const arrLength = arr.length;
    const arr1 = [];
    
    for(let x of arr){
        if(x !== 0){
            arr1.push(x)
        }
    }
     arr.length = 0;
     for( let x of arr1){
        arr.push(x)
     }
     while(arr.length < arrLength){
        arr.push(0);
     }
     console.log(arr);
}