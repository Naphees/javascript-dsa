// Q.1 : Print Numbers 1 to 10
function printN(){

  console.log(`Print Numbers 1 to 10 by loop :`);
 for(let i = 1; i <= 10; ){
    console.log(i);
    i++;
 }
}
printN(); // call printN
 // Q.2 : Print Even Numbers (using a loop , print all even numbers from  1 to 20)
async function evenNumber(){
    try {
        console.log(`EvenNumber function`);
        evenLoop: for(let i = 2; i <= 20; i++){
            if(i % 2 === 0){
                console.log(`${i} is even`);
            }
        }
    } catch (error) {
      console.log(error);
    }
}
await evenNumber();

// Q.3 : Sum of Numbers ( Using a loop , find the sum of numbers from 1 to 100.)
// Expected output : 5050

async function sumNumber(){
     try {
        console.log(`Total Sum :`);
           let totalSum = 0;
           for(let i = 1; i <= 100; i++){
            totalSum += i;
           }
           console.log(`total sum : ${totalSum}`);
     } catch (error) {
         console.log(error);
     }
}

await sumNumber();

// Q.4 : Multiplication table  " take a  number (for example  5 ) and print its multiplication up to 10."
async function multiplyTabel(){
    try {
        console.log(`Tabel of 5 :`);
            let n = 5;
            let table;
            for(let i = 1; i<=10; i++) {
               table = n* i;
               console.log(table);
            }    
    } catch (error) {
      console.log(error); 
    }
}
await multiplyTabel();

// Q.5 : Count vowels

async function vowelsCount(){
    try {
        console.log(`Count Vowels`);
         const str = "javascript";
         let count = 0;
         vowelCount: for(let i = 0; i < str.length; i++){
            if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ){
                 count += 1;
            }
           
         }
          console.log(count);
    } catch (error) {
       console.log(error);
    }
}
await vowelsCount();