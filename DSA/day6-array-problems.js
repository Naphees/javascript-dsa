// Date 12 - 8 -2026
//  Array Problems

// Q.1  Find the sum of even numbers.

function arrayElementEvenSum(){
  const arr = [10,15,22,31,40,51];
  let evenSum = 0;
  for( let x  of arr){
    if(x % 2 === 0){
        evenSum += x;
    }
  }
  console.log(`Program  Array Element Even NUmbers Sum \n Orgininal  Array ${arr}`);
  console.log(`Even Sum : ${evenSum}`);
}
arrayElementEvenSum();


// Q.2 . Find duplicate elements in array
function arrayDuplicateElement(){
    const arr = [10,20,10,30,40,20,50];
    let duplicateElement = [];
    let counter = 0 ;
    for(let x = 0;x < arr.length; x++){
        for(let y = x; y < arr.length; y++){
            if(arr[x] === arr[y]){
                 counter++;
                 if(counter > 1){
                    duplicateElement.push(arr[x]);
                 }
            }
        }
        counter = 0;
    }
    console.log(`Program  Array Duplicate elements :`);
    console.log(`Original Array ${arr}`);
    console.log(`Duplicate Elements are ${duplicateElement}`);
}
arrayDuplicateElement();