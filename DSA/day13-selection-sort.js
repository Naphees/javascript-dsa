// Date - 22 - 8 -2026
//Topic - Selection Sort
// -  Selection Sort repeatedly finds the smallest element from the
// - unsorted part of an array and puts it at the correct position.


{
    const arr = [5,3,8,1,2];
    console.log(`Unsorted Array :${arr}`);
    for(let i = 0; i < arr.length-1; i++){
        let smallest =i;
        for(let j =i+1; j < arr.length;j++){
            if(arr[j]< arr[smallest]){
                    smallest = j;
            }
        }
        console.log(arr[smallest]);
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] =temp;
        
        console.log(`${i} : ${arr}` );
    }
    console.log(arr);
} 