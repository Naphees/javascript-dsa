// Date : 13 - 8- 2026
// Topic - Symbol

// -- Symbol is primitive data type  it store unique value

{
    let id1 = Symbol("id");
    let id2 = Symbol("id");
    console.log(id1 === id2);// output false

    // Check data type
    console.log(typeof id1); // Symbol

    const id = Symbol("id");
    const student = {
        name:"Naphees"
    };
    student[id] = 23;
    console.log(student.id);// undefined
    console.log(student[id]);// 23
}

// Symbol with for always  return true
// Symbol() creates a new unique Symbol every time.

// Symbol.for() looks in the global Symbol registry and reuses the Symbol with that key.

{
    const id1  = Symbol.for("id");
    const id2 = Symbol.for("id");
    console.log(`Symbol.for() always returns true`);
    console.log(id1 === id2);// return true
}