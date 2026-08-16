// Date : 15 - August - 2026
// Topic : toLocaleString()
// - toLocalString() converts a value into a locae-sensitive string format
// - A locale represents a language/region, such as:
//
// "en-US" → United States
// "en-IN" → India
// "de-DE" → Germany
// "fr-FR" → France

{
    let num = 1234567.89;
    console.log(num);// 1234567.89
    console.log(num.toLocaleString());// 1,234,567.89
}

//  Currency Formatting
// You can use an options object
{
    let price = 1234.95;
    let result = price.toLocaleString("en-In",{
        style:"currency",
        currency:"INR"
    });
    console.log(price);// 1234.95
    console.log(result);// ₹1,234.95


}
{
    let date = new Date();
    console.log(date.toLocaleString("en-IN"));
    // customize date
    console.log(date.toLocaleString("en-US",{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    }));
}