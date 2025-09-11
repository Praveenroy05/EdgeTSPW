// Conditional statement - It allows us to execute the different block of code {...} based on different condition.

// if(20>100){ // false
//     console.log("first value is greater than 2nd value");
// }
// else{
//     console.log("first value is not greater than 2nd value");
// }

// 1. if statement
// 2. if else statement
// 3. if else if statement
// 4. switch statement
// 5. Nested if else statement

// 1. if statement
// Syntax:
// if(condition){...}

let a1 = "TS"

if(a1 == "ts"){
    console.log("a1 is equal to TS");
}

// 2. if else statement
// Syntax:
/*

if(condition){
  // block of code
}
else{
   // block of code 
}

*/

if(a1 == "ts"){
    console.log("a1 is equal to TS");
}
else{
    console.log("a1 is not equal to TS");
}


// 3. if else if statement
// Syntax:

/*

if(condition1){
 // block of code
}
else if(condition2){
 // block of code
}
else{
// block of code    
}


*/

let browser  = "opera"

if(browser == "chrome") // chrome == chrome
{
    console.log("Browser is chrome");
}
else if(browser == "firefox"){
    console.log("Browser is firefox");
}
else if(browser == "safari"){
    console.log("Browser is safari");
}
else{
    console.log("Browser is not supported");
}
// if else if statement
// 1. Ranges (>-90 - Marks >80 && Marks <70)
// 2. Datatypes are different 
// 3. Logical Operator (&& , ||)
console.log("***************************************");

// 4. switch statement
// Syntax:

/*

switch(expression)
{
 case value1:
    // code
    break; // mandatory
 case value2:
    // code
    break;
 case value3;
    // code
    break;

 default:
    // code
}

*/

let browserName = "safari"

switch(browserName) // switch("chrome")
{
    case "chrome":
        console.log("Launch the chrome browser");
        break;
    case "firefox":
        console.log("Launch the firefox browser");
        break;
    case "safari":
        console.log("Launch the safari browser");
        break;
    default:
        console.log("Browser is not supported");
}


// Calculate the total shipping cost. Standard shipping is $10. If the orderTotal is over 100, shipping is free. If isPremiumMember is true, shipping is free regardless of the orderTotal. Print the final shipping cost.

let orderTotal = 150; let isPremiumMember = true; let shippingcost = 10

if (isPremiumMember === true){
   shippingcost = 0
}
else if (orderTotal > 100){
    shippingcost = 0
}

if (shippingcost === 0){
    console.log("Total Shipping Cost is Free")
}
else{
    console.log("Total Shipping Cose $" + shippingcost )
}


if(isPremiumMember){
    shippingcost =0 
}
else if(orderTotal > 100){
    shippingcost = 0
}
else{
    shippingcost = 10
}