//  array common function 
// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element

const forEachFun = () => {
    try {
         const numbers = [45,3,4,16,25];
         let text = "";
         numbers.forEach(myFunction);
         console.log(`ForEach Function : ${text}`);
         function myFunction(value,index,array){
            text += value + ` index : ${index} \n`;
         }
    } catch (error) {
        console.log(error.message);
    }
}
 forEachFun();

 // JavaScript Array map()

 const mapFun = () =>{
    try {
           const number1 = [3,2,34,43,25,3];
           const number2 = number1.map(myFunction);
           console.log(`Array Map Function : \n  ${number1} : ${number2}`);
           function myFunction(value, index,array){
            return value * 2;
           }
    } catch (error) {
        console.log(error);
    }
 }
 mapFun();

 // JavacScript Array flatMap()

 const flatMapFun = () =>{
    try {
           const number1 = [1,2,34,5,43,3] ;
           const number2 = number1.flatMap(x => [x, x*10]);
           console.log(`Real Array : ${number1} : flatMapArray : ${number2}`);
    } catch (error) {
        console.log(error);
    }
 }
 flatMapFun();

 // Javascript Array filter
 const filterFun = () => {
    try {
         const number1 = [3,44,33,2,34,33,22,2,19,3];
         const over18 = number1.filter(myFunction);
         console.log(`array filter function: `);
         console.log(`Real Array : ${number1} , filtered Array : ${over18}`);
         function myFunction(value,index,array){
            return  value > 18;
         }
    } catch (error) {
       console.log(error); 
    }
 }
 filterFun();