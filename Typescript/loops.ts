// Loops - Which will execute the same block of code {...} multiple times


console.log(1); // console.log()
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("******************");

for(let i=1 ; i<=50; i++){
    console.log(i);
}

console.log("******************");

// 1. for loop
    // a. for loop - Traditional for loop  - If we know how many times we have to execute the iteration
    // b. for ..of loop - Loop over the iterable objects - Arrays, String - [1,2,3]
    // c. for ...in loop - Loop Over the properties of an objects - {key : value}
// 2. while loop - If we do not know how many time we have to run the iterations
// 3. do while loop - If we want to execute the iteration atleast 1 time



// 1. for loop - Traiditional loop
// Syntax:

/*
for(initialisation ; condition; increment/decrement){
  // code
  break;
}

initialisation - Initilise the variable to start the execution. Ex: let i = 0
condition - Condition to check whether the loop should continue or not. Ex: i <5
increment/decrement - increase or decrease the variable after each iteration. Ex: i++/i--


*/

let i = 9 // initialisation
let k // declaration

// 1 to 5

for(let i=1; i<6 ; i++){ // i=6, 6<6 // 5++= 5+1 = 6
    if(i==3){
        break
    }
    console.log(i); // 1 2 3 4 5 

}

console.log("*************************");

// 2. While loop
// Syntax:

/*

initialisation
while(condition){
 // code
 increment/decrement
 break;
}

*/

// 10 .... 1

let j = 10
while(j>10){ //  j>=1 
    console.log(j);
    j-- // 10 9 8 ....1
}

console.log("**************************");

// 3. do while loop
// Syntax:

/*
initialisation
do
{
 // code
 increment/decrement

}while(condition);

*/

let a =10
do{
    console.log(a);
    a--
}while(a>10)




