// Date : 10 - 8 -2026
// Array Problems

// Q.1 Find  largest and second largest elements in array.

function arrayLargestSecondLargestElement(){
    const arr = [10,45,67,12,89,34];

    let largest = arr[0];
    let secondLargest = arr[0];
    for(let x of arr){
        if(x > largest){
            secondLargest = largest;
            largest = x;
        }
       else if(x < largest && x > secondLargest)
         secondLargest = x;
    };
    
    console.log(` Real Array : ${arr}`);
    console.log(`Largest Element : ${largest}`);
    console.log(`Second Largest Element : ${secondLargest}`);
}

arrayLargestSecondLargestElement();

// Q. 2. Find the average  of array
function arrayAverage(){
    const arr = [10,20,30, 40 , 50];
     let sum = 0;
     
     for(let x of arr){
        sum += x;
     }
     let average = sum / arr.length;
     console.log(`Array is ${arr} \n Array average : ${average}`);

}
arrayAverage();

function arraySecondSmallest(){
    const arr = [ 45,12,78,23,9,56];
    let smallest = arr[0];
    let secondSmallest = arr[0];
    for( let x  of arr){
        if(x < smallest){
           secondSmallest  = smallest;

           smallest = x;
          
          
        }
        else if (x > smallest && x < secondSmallest){
            secondSmallest = x;
        }
        
        
    }
    console.log(`Real Array : ${arr} \n Smallest Element: ${smallest} \n Second Smallest : ${secondSmallest}`);
}
arraySecondSmallest();