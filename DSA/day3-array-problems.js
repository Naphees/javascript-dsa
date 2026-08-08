// Date 8 - 8 -26
// Array Problems

// Q.1 Find the sum of all elements 
// const arr = [10,20,30, 40,50]
// Expected output : 150

function arraySum(){
    const arr = [10,20,30,40,50];
    let sum = 0;
    console.log(`Array Elements Sum`);
     for(let i of arr){
        sum += i;
     }
     console.log(`Array: ${arr}`);
     console.log(`Array Sum : ${sum}`);
}
arraySum();

// Q.2. Find the largest element
// const arr = [10,45,23,78,12]
// Expeted output: 78

function arrayLargestElement(){
    const arr = [10,45,23,78,12];
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        
        }
    }
    console.log(`Array :  ${arr}`);
    console.log(`Largest Element : ${largest}`);
}

arrayLargestElement();

// Q.3 Find the smallest element
function arraySmallestElement(){
    const arr = [25,10,45,5,30];
    let smallest = arr[0];
    for(let i = 1; i < arr.length;i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    console.log(`Array : ${arr}`);
    console.log(`Smallest Element : ${smallest}`);
}

arraySmallestElement();

// Q.4 Count even number
function arrayCountEvenNumber(){
    const arr = [10,15,20,25,30,35];
    let evenCount = 0;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] % 2 === 0){
            evenCount ++;

        }
    }
    console.log(`Array Elements : ${arr}`);
    console.log(`Even Number Count : ${evenCount}`);
}
arrayCountEvenNumber();

// Q.5  Reverse Array Element
function arrayElementReverse(){
    const arr = [10,20,30,40,50];
    const reverseArray = [];
    for(let i = arr.length - 1; i >= 0 ; i--){
        reverseArray.push(arr[i]);
    }
    console.log(`Real Array : ${arr}`);
    console.log(`Reversed Array : ${reverseArray}`)
}
arrayElementReverse();