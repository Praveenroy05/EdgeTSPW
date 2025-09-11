// Datatype - Which defines what kind of data a variable is storing

// 2 Types of data types:

// 1. Primitive data types - Only have a single value
     
      // 1-5 are common in both JS and TS
      // 1. number
      // 2. string
      // 3. boolean
      // 4. null
      // 5. undefined
       
      // Only in TS
      // 6. any
      // 7. union (number|string)



      // 1. number  - Represents both integer (90, -78) and flotaing point number (78.45, 4646.45756757)
      // Syntax:
      // Keyword(var/let/const) variableName: dataType(Optional)  = value - TS
      // Keyword(var/let/const) variableName  = value - JS

      let variable: number = 78 // Type Annotation
    //  variable  = "TS"
    
      let variable1  = 5576.436456456 // Type Inference

      // What is difference between Type Annotation and Type Inference
      // Explicitly mentioning of the datatype of any variable is known as Type Annotation
      // When both JS and TS identies the data type of a variable implcitly depending on the value stored in a variable is known as Type Inference


      // typeof - It return us a datatype of variable
      console.log(typeof variable);
      console.log(typeof variable1);


      // 2. string - Combination of characters - this, string

      /*
      1. SingleQuote ('') - String Literal
      2. DoubleQuote ("") - String Literal
      3. Backtick (``) - Template Literal - This will help in terms of parametrisation of a string

      */


      let singleQuote = 'Javascript'
      let doubleQuote = "Typescript"
      let backtick  = `This is a string`

      let age = 30

      let info = `You are of age : ${age}` // ${variableName} // ${age}
      console.log(info);

      // 3. boolean - true or false
      console.log(10>50)

      // 4. null - Intentional absense of a value

      let varaible2: null = null

      // 5. undefined - Variable is declared  but the value is not assigned
      let variable3 :undefined = undefined

      let variable4 = 90 // Assignment of a variable
      let var5 // Declaration of a variable
      console.log(var5)


      // 6. any - Any type of data can be assigned for a variable

      let var6: any = 90
      var6  = "TS"
      var6 = true
      var6 = null
      var6 = undefined


      // 7. union - (number | string)
      let var7 :(number | boolean)= 10
     // var7 = "JS"
      var7 = true

     let negative = -10.346456
     console.log(negative);



// 2. Non-primitive data types - More than one value
     
      // 1. Array
      // 2. Objects
      // 3. Strings
      // 4. Function


// Operators - 
