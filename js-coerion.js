// Date : 15 - 8 -2026
// Topic : Type Coercion
//  - Type coerion is the automatic conversion of one data type
//     into another by JavaScript

{
    let result = "55" +5;
    console.log(result);// 555
    console.log(typeof result);// string

    console.log("45" - 3);// 42
    result = 55;
    console.log(result -"34"); // 21
    result -= "4";
    console.log(typeof result, result);// number  51

    let x = Number("10");
    console.log(x);// 10
}