// Operators - It is a symbol

// 1. Arithmetic OP - Mathematical Calculations
// 2. Comparison OP - Condition or Comparison
// 3. Logical OP - Validation of multiple condition
// 4. Assignment OP - Assign the value to a variable


// 1. Arithmetic Operators:

     // 1. Addition (+)
     // 2. Subtraction (-)
     // 3. Multiplication (*)
     // 4. Division (/)
     // 5. Modulus (%)
     // 6. Exponential (**)
     // 7. Increment Operator(++)
     // 8. Decrement Operator (--)


// 1. Addition (+)
let a1 = 10
let b1 = 20
console.log(a1 + b1) // concat - merging one vlaue to other - 1020

// 2. subtraction (-)
console.log(a1-b1);

// 3. Multiplication (*)
console.log(10 * 9);
//console.log("TS" * "6"); 

console.log(Number("50.79935"));// NaN - Not a Number

//Number("10") - Type Conversion - It is a process of converting one data type into other data type explictily

// Type Coercion - Is a process to convert one data type into other datatype implicitly.

// 4. Division (/)
console.log(10/3); // 4.5

// 5. Modulus (%) - Remainder after division
console.log(9 % 2); // 1

// 6. Exponential (**) // 2^2 = 2**2 = 4
console.log(5 ** 3);// 5^3 // 5*5*5 // 125

// 7. Increment Operator - (++) - It will increase the valiue of the variable by 1

let c = 20
// Pre-increment (++c) - First the value of the variable will be incremented and then the action will be performed
console.log(++c); // 21

let d = 10
// Post-increment (d++) - First action will be performed and then the value will be incremeneted
console.log("Line #56", d++); // 10
console.log("line #57", d++); // 11
console.log("line #58", d); // 12



// 8. Decrement Operator (--) - It will decrease the value of the varaible by 1

let e = 5
// Pre-decrement (--e) - First the value of the variable will be decremented and then the action will be performed
console.log(--e);
let f = 7

// Post-decrement (f--) - First action will be performed and then the value will be decremented
console.log(f--);
console.log(f);

console.log("******************************");

// 2. Comparison Operators - Compares the two values and return the result as boolean (true or false)
    // 1. == (Equal To)
    // 2. != (Not Equal To)
    // 3. === (Strict Equal To)
    // 4. !== (Strict Not Equal To)
    // 5. > (Greater than)
    // 6. >= (Greater then or Equal)
    // 7. < Less than
    // 8. <= less then or Equal


    // 1. == (Equal To) - Check if the two VALUES are same or not
    let i1 = 10
    let i2 = 10
    console.log(i1);
    console.log(i2);

    console.log("Equal To", i1 == i2); // 10 == 10

    // 2. != (Not Equal To) - Check if the two VALUES are not same
    console.log("Not Equal To", i1 != i2); // false

    // 3. === (Strict Equality or Strict Equal To) - Check if the VALUES and DATATYPE of two variables are same or not

    console.log("Strict Equal To", i1 === i2); // false

    // 4. !== (Strict Not Equal To) - Check if the VALUES or DATATYPE of two variables should not be same
    console.log("Strict Equal To", i1 !== i2); // false

    // 5. > (Greater than)
    console.log(10 > 7);

    // 6. >= (Greater Than or Equal)
    console.log(10 >= 10); // 10>10/ 10==10

    // 7. < (Less Than)
    console.log(7 < 4);

    // 8. <= (Less than or equal)
    console.log(10 <= 10);


    // 3. Logical Operator - will validate 2 different expressions(condition) and return the result as a boolean (true or false)

        // 1. AND (&&) - Both the condition should be true 
        // 2. OR (||) - Either of the condition should be true 
        // 3. NOT (!) - Will negate the condition (true will become false and false will become true)

     // 1. AND (&&) - Both the condition should be true to get the true as a result

     // true && true - true
     // true && false - false
     // false && true - false
     // false && false  - false

     console.log("AND &&", (7>6) && (10>5)) // true
     console.log("AND &&", (7>6) && (10>50))  // false
     console.log("AND &&", (7>60) && (10>5)) // false
     console.log("AND &&", (7>60) && (10>50)) // false

     // 2. OR (||) - Either of the condition should be true

     // 1. true || true  - true
     // 2. true || false - true
     // 3. false || true  - true
     // 4. false || false - false

     console.log("OR ||", (7>6) || (10>5))  // true
     console.log("OR ||", (7>6) || (10>50)) // true
     console.log("OR ||", (7>60) || (10>5)) // true
     console.log("OR ||", (7>60) || (10>50)) // false

     // 3. NOT (!)  - Will reverse the result  - from true to false and false to true

     console.log("Not", !(10>5)) // !true - false
     console.log("Not", !(100>200)) // !false - true


// 4. Assignment Operator (=) - Assign the value to a variable

     let name1 = "john"
     console.log(name1);

     // What is difference between =, == and ===




let c1=20
console.log(++c1);
//console.log(c1);
console.log(++c1 - c1)


let j1 :any = 10
let k1 :any = "10"
k1 = 10
console.log(j1===k1); //



