// Date : 16 - 8 - 2026

// Type Conversion changes the data type.
// Destructuring extracts values from objects or arrays into variables.

// Q.1. String  to Number
// Convert "250" into a number and print its type

{
    let x ="250";
    console.log(typeof x);
    console.log(typeof Number(x));

}
// Q.2. Number to String
// Convert 500 into a string and print its type.
{
    let x = 500;
    console.log(typeof x);
    console.log(typeof String(x));
}

// Q.3. Boolean Conversion
// Convert these values to numbers
// true
// false
{
    console.log(Number(true));// 1
    console.log(Number(false));// 0
}

// Q.4. Unary +
// Without using Number(), convert:
{
    let price ="999";
    let result = + price;
    console.log(typeof price, typeof result);
}

// Q.5. parseInt() and parseFloat()
// Convert "25.75"
// using both parseInt() and parseFloat()
{
    console.log(parseInt("25.75"));// 25
    console.log(parseFloat("25.75"));// 25.75
}

//  Level 2 - Type Coercion
// 6. Predict the Output
{
    console.log("10" + 5); // 105
    console.log("10" -5);  // 5
    console.log("10" * 2);// 20
    console.log("10"/2); // 5
}

// 7. What is the Output ?
{
    console.log(5 + null); // 5
    console.log("5" + null); // 50 but wrong   right is 5null
    console.log("5" - null) ;// 5
    console.log(true + 5);// 6
}

// Q.8. Basic Destructuring
{
    const colors = ["Red","Green","Blue"];
    const [first, second, third] = colors;
    console.log(first);// Red
    console.log(second);// Green
    console.log(third);// Blue
}

// Q.9. Skip Values
// const numbers = [10,20,30,40,50];
// destructuring extaract : 10 , 30 ,50

{
    const numbers = [10,20,30,40,50];
    const [a,,b,,c] = numbers;
    console.log(a);// 10
    console.log(b);// 30
    console.log(c);// 50
}

// Q.10 . Rest Operator
// const numbers = [5,10,15,20,25,30];
// output first 5 ,second = 10, rest = [15,20,25,30]
{
    const numbers = [5,10,15,20,25,30];
    const [first, second, ...rest] = numbers
    console.log(first);
    console.log(second);
    console.log(rest);
}

// Level 4 Object Destructuring
// Q.11. Basic Object Destructuring
{
    const user = {
        name:"Naphees",
        age:25,
        city:"Delhi"
    };
    // Extract name and city using destructuring
    const {name, city} = user;
    console.log(name);
    console.log(city);

}


// Q.12. Default Value 
{
    const user = {
        name:"Naphees",
        age:25
    };
    // Extract name and country
    // If country doesn't exist, it should automatically become:
    // India
    const {name , country ="India"} = user;
    console.log(name);
    console.log(country);


}

// Q.13. Alias
{
    const  user = {
        firstName : "Naphees",
        age:25
    };
    // Use  destructuring to create a variable called
    // name from the firstName property
    const {firstName : name} = user;
    console.log(name);

}

// Level 5 -- Nested Destructuring
// Q.14. Nested Ojbect
{
    const user = {
    name: "Naphees",
    address: {
        city: "Noida",
        country: "India"
    }
};
    // Using destructuring extract:
    // name, city, country
    const { name, address:{city,country}} = user;
    console.log(name);
    console.log(country);
    console.log(city);

}

// Q.15.  calculate total yourself - using destucturing + type conversion, calculate the total price
// Output : 53000
const products = [
    { name: "Laptop", price: "50000" },
    { name: "Mouse", price: "1000" },
    { name: "Keyboard", price: "2000" }
];

const [product1, product2,product3] = products;
const {price:price1} = product1;
const {price:price2} =product2;
const {price:price3} =product3;
console.log(Number(price1) + Number(price2) + Number(price3));

// Q.16. find first user ,use destrcuturing to extact:
// name, age, city
// Then convert age from a string to a number

{
    const users = [
    {
        name: "Naphees",
        age: "25",
        address: {
            city: "Noida"
        }
    },
    {
        name: "King",
        age: "30",
        address: {
            city: "Delhi"
        }
    }
];
const [user1] = users;
const {name, age, address:{city}} = user1;
console.log(name);
console.log(Number(age));
console.log(city);
}