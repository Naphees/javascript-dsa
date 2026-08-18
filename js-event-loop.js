// Event Loop in JavaScript
// -The Event Loop is the mechanism that allows
//  JavaScript to handle asynchronous operations
//  such as timers, API requests, and user events
//  without blocking the main thread.

// JavaScript executes synchronous code first.
//  When an asynchronous operation finishes, 
// its callback waits in a queue until
//  the call stack is empty. 
// The Event Loop then moves the callback 
// to the call stack for execution.

// Example 
{
    console.log("1. Start");
    setTimeout(()=>{
        console.log("3. Timer completed");
    },2000);
    console.log("2. End");
}