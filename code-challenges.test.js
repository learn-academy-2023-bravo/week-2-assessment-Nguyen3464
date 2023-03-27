// ASSESSMENT 2: Coding Practical Questions with Jest

const { describe } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.



// a) Create a test with expect statements for each of the variables provided.
        

    describe("divByThree", () => {
    it("evaluate an object as an argument and decides if the number value inside it is evenly divisible by three", () => {
        const object1 = { number: 15 }
         // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(divByThree(object1)).toBe("15 is divisible by three")
        expect(divByThree(object2)).toBe("0 is divisible by three")
        expect(divByThree(object3)).toBe("-7 is not divisible by three")
    })
})

/* Expected failure
     ● divByThree › evaluate an object as an argument and decides if the number inside it is evenly divisible by three
     ReferenceError: divByThree is not defined */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.

/* PseudoCode
input:  const object1 = { number: 15 }
        const object2 = { number: 0 }
        const object3 = { number: -7 }

output: Expected output: "15 is divisible by three"
        Expected output: "0 is divisible by three"
        Expected output: "-7 is not divisible by three"

1.) Create a function named divByThree
2.) divByThree will take in a object as an argument
3.) evaluate if the object's key (number)'s value is divisable by 3 using an equality operator in a conditional statement
4.) use the dot notation to access the object's key:vlaue
5.) return a interpolated statment of `${object.number} is divisibile by three` if the condition is met
6.) return a interpolated statment of `${object.number} is not divisibile by three` if the condition is not met */

const divByThree = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else {
        return `${object.number} is not divisible by three`
    }
}

/* PASS  ./code-challenges.test.js
  divByThree
    ✓ evaluate an object as an argument and decides if the number value inside it is evenly divisible by three (1 ms) */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

    describe("capsArray", () => {
        it("take in an array of string data type, and return a new array with each element capitalized", () => {
           const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
           // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
           const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
           // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
           expect(capsArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
           expect(capsArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
        })
    })

 /* FAIL  ./code-challenges.test.js
  divByThree
    ✓ evaluate an object as an argument and decides if the number value inside it is evenly divisible by three (1 ms)
  capsArray
    ✕ take in an array of string data type, and return a new array with each element capitalized

  ● capsArray › take in an array of string data type, and return a new array with each element capitalized

    ReferenceError: capsArray is not defined */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.

/* PseudoCode

input: 1.) const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
       2.) const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

output: 1.) Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        2.) Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

1.) Create a function named capsArray
2.) capsArray will take an array as an argument
3.) Use .map() to iterate through the array and access the string data type value at each index
4.) Access the first index of the string using the value parameter at index [0]
5.) Use .toUpperCase to upper case the value at index
6.) Use .slice(1) to access a shallow copy of the strings's first index
7.) Interpolate and return the value at each index to a new array */


const capsArray = (array) => {
    return array.map((value) => {
        return `${value[0].toUpperCase()}${value.slice(1)}`
    })
}

/*   PASS  ./code-challenges.test.js
  capsArray
    ✓ take in an array of string data type, and return a new array with each element capitalized (1 ms) */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("wheelOfFortune", () => {
    it("evaluate a string and return the index of the first vowel", () => {
       const vowelTester1 = "learn"
       // Expected output: 1
       const vowelTester2 = "academy"
       // Expected output: 0
       const vowelTester3 = "challenges"
       // Expected output: 2 
       expect(wheelOfFortune(vowelTester1)).toEqual(1)
       expect(wheelOfFortune(vowelTester2)).toEqual(0)
       expect(wheelOfFortune(vowelTester3)).toEqual(2)
    })
})

/* FAIL  ./code-challenges.test.js
  wheelOfFortune
    ✕ evaluate a string and return the index of the first vowel (1 ms)

  ● wheelOfFortune › evaluate a string and return the index of the first vowel

    ReferenceError: wheelOfFortune is not defined */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.

/* Pseudocode

input: 1.) const vowelTester1 = "learn"
       2.) const vowelTester2 = "academy"
       3.) const vowelTester3 = "challenges"

output: 1.) 1
        2.) 0
        3.) 2

1.) create a function name wheelOfFortune
2.) wheelOfFortune will take in a string as an argument
3.) Use .split("") to change the string into an array, store it in a variable called array
4.) loop through the array with a for loop
5.) use a equality operator to check for vowel at index
6.) Return the index of the first vowel */

        const wheelOfFortune = (string) => {
          let array = string.split("");
          for (i = 0; i < array.length; i++) {
              if(array[i] === 'a'||array[i] === 'e'||array[i] === 'i'||array[i] === 'o'||array[i] === 'u'||array[i] === 'sometimes y')
                  return [i];
              }
          }

 /* PASS  ./code-challenges.test.js
  wheelOfFortune
    ✓ evaluate a string and return the index of the first vowel (1 ms) */