// string   5 questions solve
// date : 8 - 6 - 2026

// Q.1 : string length
async function stringLength(){
    try {
         const str = "Javascript";
         console.log(`string length : ${str.length}`);
    } catch (error) {
        console.log(error) ;
    }
}
stringLength();

// Q.2 : Convert to uppercase
async function stringToUpperCase(){
    try{
            const str = "hello world";
            console.log(`String UpperCase : \n Original String ${str}  To UpperCase : ${str.toUpperCase()}`);
    }catch(error){
        console.log(error);
    }
}
stringToUpperCase();


// Q.3 : Count Character "m"
async function countCharacter(){
    try {
          const str = "programming" ;
          let count = 0;
          for(let i = 0 ; i < str.length; i++) {
            if(str[i] === 'm'){
                count += 1;
            }
          }
          console.log(` m count  : ${count} `);
    } catch (error) {
        console.log(error) ;
    }
}
countCharacter();

// Q.4 : Reverse String
// first process
async function stringReverse(){
    try {
         const str ="hello";
         let reversed ="";
         for(let i = str.length - 1; i >= 0;i--){
            reversed += str[i];
         }
         console.log(`Original String :  ${str}  Reversed String : ${reversed}`);
    } catch (error) {
        console.log(error);
    }

}
stringReverse();
// second revese function
async function stringReverse1(){
    try {
        const str = "hello";
        let reversed = str.split('').reverse().join('');
        console.log(`Original String : ${str}  Revesed String : ${reversed}`);
    } catch (error) {
      console.log(error);
    }
}
stringReverse1();

// Q. 5 : Find the last character
async function findLastCharacter(){
    try {
         const str = "javascript";
          const length = str.length;
          let lastChar = str[length -1];
          console.log(`String  : ${str} :  String Last Character : ${lastChar}`);
    } catch (error) {
        console.log(error);
    }
}
findLastCharacter();