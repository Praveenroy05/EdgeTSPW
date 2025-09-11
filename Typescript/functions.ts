// Function:-

//function login(){
    // fill the username
    // fill the password - Locator changed
    // click on login button
//}


// 100 Tcs - 300 -dup
// maintenance - 100 
// Reusability - 


// 1. Named Function - Function Declaration 

// 2. Anonymous Function (Unnamed function) - Function Expression 
     // a. Anonymous function
     // b. Arrow function =>

// 3. Function Constructor - Classes - Named Function
// 4. IIFE - Immediately Invoked Function Expression - Anonymous
// 5. Factory Function - A function which will return an object - Named Function


// 1. Named Function - Function Declaration
// Definition:
// A function which will be declared along with the name. Function will be declared using a "function" keyword followed by function name.


// Syntax:

// TS
/*
function functionName(params:datatype): returntype{
 // code to be executed
 // return
}

functionName(argument)

// Parameters - It is the variable defined in the function definition inside the paranthesis of a function
// Arguments - It is the value passed to the function when it is called

*/


/*
function functionName(params){
 // code to be executed
 // return
}
*/


// 1. Paramterised function and non-returning function

function add(a:number,b:number):void{ // a,b - Parameters
    console.log(a+b); // 30
}
add(10,20) // arguments

// 2. parameterised function and returning

function addition(a:number,b:number,c:string) : string{
    return a+b+c
}

 const additionResult = addition(10,20,"30")
 console.log(additionResult);


// 3. non-parameterised and non-returning

function greeting(){
    console.log("Welcome to Typescript");
}

greeting()

// 4. non-parameterised and returning

function greet(){
    return "Hello, How are you" 
}

console.log(greet())

// 1. store the value inside a variable and print that varaible
// 2. You can directly print the function call itself




// 2. Anonymous Function - Function Expression (let i = function (){})
// Definition:
// A function which will be declared using a function keyword and without having any name. Function will be declared using the funtion keyword followed by parameters

// Syntax:
/*

let varaible  = function(parameter: datatype) :returntype{
        // code to be executed
        // return keywrof for returning functionName
}

varaible(arguments)

*/

// Callback function - A function which will be utilised as a parameter inside another function


function greeings(a){
        a()
}

greeings(function(){
    console.log("Call back function");
})

function names(name){
    console.log("Hello");
}


names("Rahul")



// 3. Arrow function (=>) - Anonymous
// Defintion: 
// Arrow function is a small function which can be declared in one line without even using function keyword. It is used to declare a small function which can be used as a call back function.

// Properties
// 1. Whenever you try to define an arrow function we do not even require to use function keyword
// 2. When you are trying to write a single line of code inside a function, we do not require curly braces {} to be utilised.
// 3. If you have a single line code and a function is returning something we do not even require to use return keyword
// 4. If we have a single parameter inside the function , you do not even require() to store the parameter.

// Syntax:

/*

let variable = (parameter) => {
 // code
}

variable()

*/


let userInfo = (a, b) =>  a+b


const arrowResult = userInfo(10, 20)
console.log(arrowResult);

let userInfo1 = name =>  console.log(`Hello, ${name}`)

userInfo1("John");



// 4. IIFE - Immediately Invoked Function Expression
// Definition: It is used to declare a function which is invoked immediately after it is defined.

// Syntax:

/*
((function(parameter){
    // code to be executed
})
();

*/

var i = 10;

{
    var i = 30 // Global scoped varaible
}

(function(id){
    console.log(`your id is : ${id}`);
})
(101)


// 5. Factory function - A function which will return an object.

// {key : value} - Object


// SYntax:

/*

function functionName(parameter){
    return
    {
       key: value,
       key1 : value1
    }
}

*/

function personInfo(name, age){
    return {
        name1 : name,
        age1: age
    }
}

const personObj = personInfo("joe", 30)
console.log(personObj.name1);





var flag = false;

(function name1(){
    let flag = false // local scope
    function name2(){
        flag = true
        console.log(flag);
    }

    name2();
    console.log(flag); 
})
()

console.log(flag);


// Array - TS



