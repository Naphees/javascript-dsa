// Javascript Number 
// Date : 8 - 6 - 2026
// Numbers 10 Questions

// Q.1 : Check Even Or Odd
async function checkEvenOdd(){
    try {
        const num = 23;
        if(num % 2 == 0) {
            console.log(`${num} is : even`);
        }else{
            console.log(`${num} is : odd`);
        }
    } catch (error) {
       console.log(error);
    }
}
checkEvenOdd();

// Q.2 : Find The Largest Number
async function checkGreater(){
    try {
        const num1 = 10;
        const num2 = 25;
        console.log(`Check greater number \n Between ${num1} and ${num2}`);
        if(num1 > num2){
            console.log(`${num1} is : greater`);
        } else{
            console.log(`${num2} is : greater`);
        }

    } catch (error) {
      console.log(error)  
    }
}
checkGreater();

// Q.3 : Reverse a number
async function checkReverse(){
    try {
        console.log("Reverse Number Program ");
        let num = 12340;
        console.log(`Real Number : ${num}`);
        let reversed = 0;
        while(num > 0) {
            let mod = num % 10;
            num = Math.floor(num / 10);
            reversed = reversed * 10 + mod;
        }
        console.log(` Reverse Number : ${reversed}`);
    } catch (error) {
        console.log(error);
    }
}
checkReverse();

// Q.4 : Count Digit Program
async function countDigit(){
    try {
        console.log(`Digit Count Program `);
        let num = 45634340;
        console.log(`Real Number : ${num}`);
        let digits = 0;
        

        while(num > 0){
            num = Math.floor(num / 10);
            digits += 1;
        }
        console.log(`Total Digits : ${digits}`);
    } catch (error) {
        console.log(error);
    }
}
countDigit();

// Q.5 : Some Digit Program

async function someDigit(){
    try {
            console.log(`Some Digits Program`);
            let num = 43399;
            console.log(`Real Number : ${num}`);
            let someDigits = 0;
            while(num > 0){
                let mod = num % 10;
                num = Math.floor(num / 10);
                someDigits += mod;
            }  
            console.log(`Digit Sum Is : ${someDigits}`);
            
    } catch (error) {
        console.log(error);
    }
}
someDigit();


// Q.6 check number is positive  ,negative and zero

const checkNumber  = async(x)=>{
    try {
       console.log("Check Number is Positive ,Negative and Zero");
        if(x > 0){
        return x + "positive";
    }else if(x < 0){
        return x + "Negative";
    }else{
        return x + "Zero";
    }
    } catch (error) {
        console.log(error);
    }
    

}
console.log( checkNumber(-4));


// Q.7 find fectorial of any number
const fectorial = async(x)=>{
 try {
       console.log(`Find fectorial of whole number `);
       let fec = 1;
       if(x < 1 ){
        fec = 0;
        console.log(`Fectorial is ${fec}`);
       }else{
             for(let i = 1;i <= x; i++ ){
                fec = fec * i;
             }
             console.log(`Fectorial of ${x} is ${fec}`);
       }
      

 } catch (error) {
    console.log(error);
 }
}
await fectorial(5);

// Q.8  Check Prime Number 
const checkPrimeNumber = async(x)=>{
    try {
        console.log(`Check Prime Number or Not`);
        let isPrime = true;
        if(x <= 1){
            isPrime = false;
            
        }else{
            for( let i = 2 ; i < x; i++){
                if(x % i == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                console.log(`${x} is Prime Number`);
            }else{
                console.log(`${x} is not Prime Number`);
            }
        }
    } catch (error) {
      console.log(error);  
    }
}
await checkPrimeNumber(1);


// ArmStrong Number Check 
const  armStrongFun = (num) =>{
    try {
        console.log(`ArmStrong Function`);
         const  strNum = num.toString();
         const digits = strNum.length;
         let sum = 0;
         for(let digit  of strNum){
            sum  += Math.pow(Number(digit),digits);
         }
         if(sum === num){
            console.log(`${num} ArmStrong Number`);
         }else{
            console.log(`${num} is not ArmStrong Number`);
         }
    } catch (error) {
       console.log(error); 
    }
}
armStrongFun(153);
armStrongFun(125);