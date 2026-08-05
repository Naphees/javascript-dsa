// JS Map
// A Javascript Map  is an object that can store collections of key-value
// pairs, similar to a dictionary  in other programming languages.
// Map differ from standard objects in that keys can be of any data type

// Example

 function createMap() {
    try{
        //  Create an empty Map
        const fruits = new Map();
        // Set Map Value
        fruits.set("Apple",400);
        fruits.set("Banana",500);
        fruits.set("Grapes",600);
        
        console.log( fruits);

        // print  individual value by get() method
        console.log(fruits.get("Apple"));
        console.log(fruits.get("Banana"));

        // Print All Entries
        for( const [key,value] of fruits){
            console.log(`${key} : ${value}`);
        }
        
        // Convert Map  to Array
        console.log(`Convert map to array`);
        console.log([...fruits]);
    }catch(error){
        console.log(`Error message : ${error.message}`)
    }
    
}

createMap();