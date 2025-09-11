// Array - []

let j1 = [30]


// int[] array = new int[5]
// array[0] = 1

// let i1 = [10 , 20, 30, 40, "JS"] // [0:10, 1:20, 2:30, 3:40, 4:"JS"]
// console.log(i1[2]);

// There are 2 different types in which we can declare an array
   // 1. Using Array Literal - []

   // Syntax:
   // JS
   // let arrayName = [value1, value2,....]

   // TS
   // let arrayName :datatype[] = [value1, .....]


   let array : (string | number |boolean)[]= ["TS", 10, 30, 345.345345, true] // 5 [0-4]
   console.log(array[0]);
   console.log(array[1]);
   console.log(array[2]);



   let array1 : string[] = []
   array1[0] = "Red"
   array1[1] = "apple"
   console.log(array1);

   console.log(Array.isArray(j1))

   // length - Return the total number of element available inside an array
   // Syntax:
   // arrayName.length

   console.log(array.length);

   for(let i =0; i<array.length; i++){
    console.log(array[i]);
   }

   console.log("****************************");

   // for ...of loop - It will give the value of each and every element present inside an array

   // Syntax:
//    let i;
   /*
   for(declare a varaible  of arrayName){
    // code
   }


   */

   for(let ele of array){
    console.log(ele);
   }

   // 2. Array Constructor - new Array()

    // Syntax:
    /*
    let arrayName = new Array<datatype>()

    */

let array2 = new Array<any>(10,20,30,40 ,"TS")
console.log(array2);



console.log("*****************************");

let myArray = [10,20,30,50, "blue", "apple", "TS", "JS"]
console.log(myArray);

// 1. push(param, param1, param2) - It will add the element at the end of an array
// Syntax:
// arrayName.push(param, param1, param2)
myArray.push("Red", 100, 200)
console.log("Push", myArray);

// 2. pop() - It will remove the last element of an array
// Syntax:
// arrayName.pop()
myArray.pop()
console.log("pop()", myArray);

// 1. What is difference between push() and unshift()
// 2. What is difference between pop() and shift()
// 3. What is difference between splice() and slice()

// 3. unshift(param, param1) - It will add the element(s) at the beginning of an array
// Syntax:
// arrayName.unshift(param,param1,.....)
myArray.unshift(1000, "Java")
console.log("unshift()",myArray);


// 4. shift() - It will remove the first element of an array
// Syntax:
// arrayName.shift()
myArray.shift()
console.log("shift()", myArray);

// 5. splice(startIndex, deleteCount, item1, item2, item3,...)
// startIndex - The position from where you want to start the operation(add/delete)
// deleteCount - Number of elements to be deleted at the starting Index
// item1, item2,... - Elements to be added from the startIndex position

// Syntax:
// arrayName.splice(startIndex, deleteCount, item1, item2, item3,...)
myArray.splice(3, 0, "Pink", "Python")
console.log("splice()", myArray);


// 6. slice(startIndex, endIndex(exclusive)) - Return a part of an array
    // startIndex (Optional)- The position  where you want to start the slice
    // endIndex(Exclusive - Optional) - The position where you want to end the slice

// Syntax:
// arrayName.slice(startIndex, endIndex)
console.log("Slice()", myArray.slice(2,7))

// Find out the duplicate elements from  an array or dup characters from string

// 7. indexOf(element, startIndex) - Return the index of first occurance of an element and if the element itself is not present then it will return -1
// Syntax:
// arrayName.indexOf(element)
console.log(myArray.indexOf(1000))

// 8. lastIndexOf(element, startIndex) - Return the index of last ooccurance of an element
// Syntax:
// arrayName.lastIndexOf(element)
myArray.push("TS")
console.log(myArray.lastIndexOf("TS"))

// 9. includes(element)  - It will check if the element is prasent inside an array or not and return us the result in the form of boolean
// Syntax:
// arrayName.includes(element)
console.log(myArray.includes("Javascript"));

// map(fun), filter(fun), reduce(fun) 



// 10. map(fun) - It will return us a new array by performing the operation(function) on each and every element of an array.
// Also it will return us the new array of same length as original array.
// Syntax:
// arrayName.map(function(element, index, arrayName){
    // code
 //})

 // element - The current element being processed in the array
 // index (Optional) - The index of current element being processed


// for(let ele of myArray1){
//     console.log(ele**2);
// }

let myArray1 = [1,2,3,4,5]

const mapResult = myArray1.map(function(ele){
    return (ele ** 2);
})
console.log(mapResult);


// 11. filter(func) - It will return us a new array by applying the condition on each and every element of an array.
// It will return us the new array cosisting of those element which passes the condition inside the function.

// Syntax:
// arrayName.filter(function(element, index, arrayName){
  // code 
//})

const sales = [
    {item: "Electronics", sale: 2000000},
]

const filterResult = myArray1.filter(function(element){
    return element %2 == 0 // 2%2 == 0
})
console.log(filterResult);


// 12. reduce(func, initialValue(Optional)) - It will return the result as a single value 
// Syntax:
/*
 arrayName.reduce(function(accumulator, element, index, arrayName){
 code
}, initialValue))

*/

// let sum=0
// for(let ele of myArray1){
//     sum = sum + ele // 0+1 = 1 , 1+2 = 3
// }
// console.log(sum);


const reduceResult = myArray1.reduce(function(total, num){
    return total + num
})
console.log(reduceResult);


// Object and class
