// Error handle with try ,catch , throw ,finally
// I practiced by  real world function

const registerUser = (name, age, email) =>{
    try{
            // name validation
            if(!name || name.trim() === ""){
                throw new Error("Name is required");
            }
            // age validation
             if(isNaN(age)){
                throw new Error("Age must be number");
            }
            age =Number(age);
            if(age < 18){
                throw new Error("You must be at least  18 years old");
            }
            // Email validation
            if(!email.includes("@") || email.length > 3 || !email.includes(".") ){
                throw new Error("Email is not valid!");
            }
           
            console.log("Registration Successfully!")


    }catch(error){
         console.log(`Registration process failed :`,error.message);
    }finally{
        console.log(`Registration process completed!`);
    }

};

registerUser("","22","a@.com");// name error
registerUser("aa","d","a@gmail.com");// error from age
registerUser("aa",34,"a@gmail");// email error
registerUser("Naphees",18, "naphees@gmail.com");// success