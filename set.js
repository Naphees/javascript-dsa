// Javascript Set
//  A javascript Set is a collection of unique values.
//  Each value can only occur once in a Set.


const letters = new Set([1,1,1,2,2,3,3]);
console.log(`Set is : ${letters}`);
console.log(letters.size);

// print Set Element
let text = "";
for(const x of letters){
    text += x + "\n";
}
console.log(`Set Elements :${text}`);

// new set 
const  fruits = new Set();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Mango");
fruits.add("Grapes");

text ="";

for(const x of fruits){
    text += x + "\n";
}
console.log(`Fruits : ${text}`);
