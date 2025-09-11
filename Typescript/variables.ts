// Variable - Storage - Which stored either a single or multiple values


// datatype variableName = value
// int i = 10
// ES6- 2015

/*

1. var - In modern JS/TS we do not use this
2. let - Whenever we know that the value of the variable can change at any PT
3. const - Which is use to declare a constant variable

*/

// Syntax:
// keyword(var/let/const) variableName: datatype(Optional) = value - TS
// keyword(var/let/const) variableName = value - JS

var i = 10
let j = 30
const k = 50

// Global variable and Local variable {...} - block of code

// var
// 1. Scope - Global or Functional
// 2. Variable declared using var keyword can be redeclared and can also be reinitialised as well
// 3. It is not mandatory to initialise the value of the variable at the time of declaration

var var2;

var2 = "TS"

var var1 = "Java" // Global

var var1 = "C#"
var var1 = "C#"
var var1 = "C#"
var var1 = "100"
var var1 = "Name";
console.log(var1)

//ES - 5, ES- 6(2015)




// if(true){
//     var var1 = "Python" // Local
// }



// function name1(){
//     var var2 = "Python" // Local
//     console.log(var2);
//     console.log(var1);
// }

// name1()
//console.log(var1);
//console.log(var2);



// let
// 1. Scope - Block level {...}
// 2. Variable declared using let keyword cannot be redeclared and but can be reinitialised
// 3. It is not mandatory to initialise the value of the variable at the time of declaration

let b; // declaration

b = "object"

let a = 30 // initialisation
a = 30

//let a = 90

if(true){
    let a = 10 // Local scope
    //let a = 100
    //let a = 40
    console.log(a); // 100
}

console.log(a); // 30


// const
// 1. Scope - Block level {...}
// 2. Variable declared using const keyword cannot be redeclared and cannot be reinitialised as well
// 3. It is mandatory to initialise the value of the variable at the time of declaration

const constant1 = 89
//const constant1 = 50

{
    const  constant1 = 20 // Local
    console.log(constant1);
}

console.log(constant1);


// var
// 1. Scope - Global or Functional
// 2. Variable declared using var keyword can be redeclared and can also be reinitialised as well
// 3. It is not mandatory to initialise the value of the variable at the time of declaration

// let
// 1. Scope - Block level {...}
// 2. Variable declared using let keyword cannot be redeclared and but can be reinitialised
// 3. It is not mandatory to initialise the value of the variable at the time of declaration

// const
// 1. Scope - Block level {...}
// 2. Variable declared using const keyword cannot be redeclared and cannot be reinitialised as well
// 3. It is mandatory to initialise the value of the variable at the time of declaration



let login 

{
    login  = "LoginPage"
}
console.log(login);