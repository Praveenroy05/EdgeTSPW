// String - Combination of characters. Text, string

/*
      1. SingleQuote ('') - String Literal
      2. DoubleQuote ("") - String Literal
      3. Backtick (``) - Template Literal - This will help in terms of parametrisation of a string

      */


      let singleQuote1 = 'Javascript'
      let doubleQuote1 = "Typescript"
      let backtick1  = `This is a string`

      let age1 = 30

      let info1 = `You are of age : ${age1}` // ${variableName} // ${age}
      console.log(info1);


   //   let str = 'c'


// classname - c1l1a2s2n1m1e1

console.log("*******************************");

// NOTE:- "?" means optional parameter


// 1. length - Return the number of characters available in the string
// Syntax:
// stringName.length

let str = "Hello Typescript" // 16
console.log(str.length);


// 2. charAt(index) - Return the character at the specified index
// Syntax:
// stringName.charAt(index)

console.log(str.charAt(4));

for(let i=0;i<str.length; i++){
    console.log(str.charAt(i));
}


// 3. concat(str1, str2) - Joins 2 or more string and return the new string
// Syntax:
// stringName.concat(str1, str2)
const concatStr = str.concat(" ", "TS", " JS")
console.log(concatStr);

// 4. includes(searchString, pos?) - return the result in the form of boolean
// Syntax:
// stringName.includes(searchString)

const result = str.includes("S", 10)
console.log(result);

// 5. indexOf()
// 6. lastIndexOf()

// 7. startsWith(searchString, index?) - Checks if the string is starting th the specified character or string
// Syntax:
// stringName.startsWith(searchString, index?)
const result1 = str.startsWith("H")
console.log(result1);

// 8. endsWith(searchString)

// 9. replace(oldString, newString)
// Syntax:
// stringName.replace(oldString, newString)
// Hello Typescript
const replacedStr = str.replace("Type", "Java")
console.log(replacedStr);

console.log(str.replace("l", "a"));

// 10. replaceAll(oldString, newString)// Syntax:
// stringName.replaceAll(oldString, newString)
// Hello Typescript

let str1 = "Hello Javascript Typescript"
console.log(str1.replaceAll("i", "a"));

// What is difference between slice and substring

// 11. slice(startIndex?, endIndex?) - Returns the portion of an string
// Syntax:
// stringName.slice(startIndex, endIndex)
console.log(str1.slice(16))
console.log(str1.slice(16, 6))

// 12. substring(startIndex, endIndex?) - Returns the portion of an string
// Syntax:
//stringName.substring(startIndex, endIndex(exclusive))
console.log(str1.substring(6));
console.log(str1.substring(3, 9));
console.log(str1.substring(16, 6));

// 13. toLowerCase() - Convert all the characters to lower case character
// Syntax:
// stringName.toLowerCase()
console.log(str1);
console.log(str1.toLowerCase());

// 14. toUpperCase() - Convert all the charcaters to uppercase character
// Syntax:
// stringName.toUpperCase()
console.log(str1.toUpperCase());


// 15. trim() - Removes the whitespace from beginning and end of a string
// Syntax:
// stringName.trim()

let str2 = "   Hello   "
console.log(str2.length);
console.log(str2.trim().length);

// 16. trimStart()
console.log(str2.trimStart());

// 17. trimEnd()
console.log(str2.trimEnd());


let str3: string[] = ["a", "b", "c", "d"]; // 0

let result2 = str3.map((ch, index) =>{
  //index % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase()
    if(index %2 ===0){
        return ch.toLowerCase()
    }
    else{
        return ch.toUpperCase()
    }
});
console.log(result2);



// Nodejs -Internet
// VS Code - Internet
// Typescript  - npm install -g typescript
// tsx  module - npm intall -g tsx
// Playwright - npm init playwright

// Tool -> Jar -> packages -> Classes -> Methods and Properties
