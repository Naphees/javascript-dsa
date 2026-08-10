// Date  - 9 - 8 - 2026
// Array problems

// Q.1  Count odd Numbers
function arrayCountOdd(){
    const arr = [10,15,22,31,40,51];
    let oddCounter = 0;
    for(let x of arr){
        if(x % 2 !== 0){
            oddCounter++;
        }
    }
    console.log(`Array :${arr}`);
    console.log(`Odd Numbers : ${oddCounter}`);
}

arrayCountOdd();

// Q.2  Reverse Array
function arrayReverse(){
    const arr = [1,2,3,4,5];
    console.log(`original array ${arr}`);
    console.log(`reversed array ${arr.reverse()}`);
}
arrayReverse();

//Q.3 Find a given number
function arrayFindElement(){
    const arr = [10,20,30,40,50];
    let target = 30;
    console.log(`Array Elements are  ${arr}`);
    for(let i of arr){
        if(i === target){
            console.log(`target found ${target}`);
            break;
        }
    }
}
arrayFindElement();


// Q.4 Count positive and negative numbers
function arrayPositiveNegativeCount(){
    const arr = [10,-5,20,-8,0,15];
    let positiveCount = 0;
    let negativeCount = 0;
    for(let x of arr){
        if(x > 0){
            positiveCount++;
        }
        else if(x < 0){
            negativeCount++;
        }
        else{

        }
    }
    console.log(`Original Array : ${arr}`);
    console.log(`Positive Values : ${positiveCount} \n Negative Values ${negativeCount}`);
}
arrayPositiveNegativeCount();