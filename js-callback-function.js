// Date : 17 - 8 -2026
// Topic - A callback function is a function that we pass
//  as an argument to another function, so it can be called later.


// 1. Example
{
    function greet(name,callback){
        console.log(`Hello ${name}`);
        callback();
    }
    function sayBye(){
        console.log("Goodbye!");
    }
    greet("Naphees",sayBye);
}

// 2. Real practical example — API/data processing
// Imagine you fetch users and want to do something after the data arrives:

{
    function fetchUsers(callback){
        setTimeout(()=>{
            const users =[
                {id:1,name:"Naphees"},
                {id:2, name:"ali"}
            ];
            callback(users);
        },5000) ;  
    }
    function showUsers(users){
      console.log(users);
    }
    fetchUsers(showUsers);
}

// 3. Example
{
    console.log("start");
    setTimeout(()=>{
        console.log("Loading...");
    },2000);
    console.log("End");
}