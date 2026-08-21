// Date -  21 - 8 -2026
// Topic - Bubble sort
// - Bubble Sort is a sorting algorithm that 
// repeatedly compares two neighboring elements.

// If they are in the wrong order, we swap them.

{
    console.log("Bubble sort : Ascending order");
    
    const numbers = [5,3,2,1,2];
    console.log("Real Array :",numbers);
    for(let i =0; i < numbers.length - 1; i++){
        for (let j = 0; j < numbers.length -i -1; j++){
            if(numbers[j]> numbers[j+1]){
                let smallest = numbers[j+1];
                numbers[j+1] = numbers[j];
                numbers[j] = smallest;

            }
        }
    }
    console.log(`Sorted Array : ${numbers}`);
}

// 2. Descending Order
{
    const numbers = [5,3,2,1,2];
    console.log(`Bubble Sort : Descending Order`);
    console.log(`Original Array : ${numbers}`);
    for(let i = 0; i < numbers.length -1; i++){
        for(let j = i; j < numbers.length - i -1;j++){
            if(numbers[j]< numbers[j+1]){
                let smallest = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = smallest;
            }
        }
    }
    console.log(`Desending Order Sort ${numbers}`);
}