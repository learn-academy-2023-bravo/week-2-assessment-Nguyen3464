// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
console.log(cohort.split(""))

// a) Your answer: This will log an array with each character in the original string as an element in the new array
// b) Verify and explain: the .split() method with the ("") when applied to a string data tyoe turns each character into an element in an array.  

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will log a interpolated string of Hello LEARN Student
// b) Verify and explain: The greeter function has a name parameter that takes "LEARN Student" as an argument.  The string interpolation joins the name parameter taking the LEARN Student argument and Hello.  greeter function call is passing in "LEARN Student"

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: This will map over the [4, 5, 6, 7, 8] array and multiply the value at index by 2 and assign it to multipliedByTwo
// b) Verify and explain: multipliedByTwo is being assigned to an array of [4, 5, 6, 7, 8].  .map is being appended to the array.  The map.((number)) parameter is evaluating value at index and multiplying  the value at index by 2, then assigning the mutated array to multipliedByTwo

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This will take in an array, filter through each element inside the array and evaluate if value at index has a remainder using the modulos. A strictly not equal to equality operator will check the condition. If the condition is met the value will be added onlyOdds array 
// b) Verify and explain: The higher order function .filter takes an array and returns a new array. .filter and the number parameter evaluates value at index, using the modulos % 2 !== 0.  The odd numbers will be pushed to onlyOdds array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: This will log the myCodingSkills object's languages key's value Javascript
// b) Verify and explain: myCodingSkills.languages[0]  accesses myCodingSkills's languages key and logs the array value's 0th index.  which in this case is the element at the 0th index is a string data type value.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This is create a new object called LearnStudent that has a key of student: value Goerge, key cohort, value "Bravo", key year value 2023.
// b) Verify and explain: class Learn constructor keyword takes an argument name and assigned the argument "Goerge" to the student's value.  the new keyword gives Learn calss an argument "Goerge".  The class will assign the key values to the new learnStudent object.

