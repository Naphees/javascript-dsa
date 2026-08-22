// Date - 22-8-2026
// Topic - Debugging
// - Debugging is the process of finding and fixing bugs in code


// Debug this code:
{
    const users = [
        {name:"Naphees",age:25},
        {name:"Ali",age:22},
        {name:"john",age:30}
    ];
    for(let i =0; i < users.length; i++){
        console.log(users[i].name);
    }
    // bug in loop
    for(let i =0; i< users.length;i++){
        console.log(
            "Index:",i,
            "Name:",users[i].name,
            "Age:",users[i].age
        );
    }
    console.table(users);

}