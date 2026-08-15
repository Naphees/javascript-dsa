// Date - 15 - 8 - 2026
// Topic - Array Problems

// Q.1 Count Duplicate Elements 
// const  arr = [10,20,10,30,20,40,10,50];

{
    const arr = [10,20,10,30,20,40,10,50];
    const visited = [];
    console.log(`Count Duplicate Elements : ${arr}`);
    
    // outer loop
    for(let i = 0; i < arr.length; i++){

        if(visited.includes(arr[i])){
            continue;
        }
        // couter
         let couter = 1;
         // inner loop
         for(let j = i+1; j < arr.length;j++){
                        if(arr[i] === arr[j]){
                            couter++;
                        }
         }
         visited.push(arr[i]);
         console.log(`${arr[i]} -> ${couter}`);
        

    }
}