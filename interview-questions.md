# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: Parameters are variable refrences that can be accessd within the scope of a function.  When a parameter is defined in the anonymous function syntax the values passed in will be correspond anywhere within the function that uses the parameter name.  An argument are values that are called upon within the function call, or invocation.  the value provided here are pushed to the parameter at the function declaration to be used within the body of the function.

Researched answer:
The values that are declared within a function when the function is called are known as an argument. Whereas, the variables that are defined when the function is declared are known as a parameter.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map() is higher order function that is used to mutate array. .map() can be used to iterate through an array then an action can be preformed at each index and return a new array.  .map() takes has 3 predefined parameters called value, index, array.  Value access the value at index, this can vary depending on the data type in the array.  Index access the array's index, or position of elements within the array.  Array is used to reference an array being passed in as an argument.  Value us required to when using .map(), index and array are optional.

Researched answer: map() does not execute the function for empty elements, or does not change the original array.

3. What is the difference between map and filter?

Your answer: .map() will iterate through each element in the argument array, resulting in a new array with the same amount of elements with in the body of the array. .filter() will evaluate the argument array using its built in conditional comparision. This method results in a reduced copy of the origial array.

Researched answer: .map() will iterate though an array and an action will me preformed at each element within the array.  .filter() will return a samller array.

1. What is iteration?

Your answer: Iteration is repeating a set amount of actions repeadly until the predetermined condition is met, in which the iteration stops.

Researched answer: methods that use itteration include, for loops, while loops, do loops, for each loops, for of loops, .map(), .filter().  each method for looping have forms of iteration involved. 

1. What is the difference between a function and a method?

Your answer: A function is a set of instructions that allows manipulating, and accessing of data using propterties and behaviors unique to each data type.  methods allow manipulation and accessing of data but is unique per data types predefined by the properties that the data type has inherently.  The changing and accessing of data may be restricted and require conversion of data types to futher manipulate code.  A function is the bridge between the spetrum of ways data can be altered.  
Within a function the conversion between data types can occur allowing access to other methods that the previous data type's properties and behaviors did not permit.

Researched answer: JavaScript every function is an object. An object is a collection of key:value pairs. If a value is a primitive (number, string, boolean), or another object, the value is considered a property. If a value is a function, it is called a 'method'.



6. STRETCH: What is hoisting in JavaScript?

Your answer: I have no idea, lets find out

Researched answer: hoisting is when data is moved to the top of the code block. For example you can use a variable, but not assign it value or declared it.  let x, and then access x.  later on assign value to x.  x = 2.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: Components let you compartmentalize and split the UI into independent, reusable pieces or features. They can be linked to the main app component to display multiple features on a UI.  This compartmentalization allows for the main product to remain while features can be amended or created.

2. Spread operator: spread operator syntax is (...) This operator allows us to quickly copy all or part of an existing array or object into another array or object.  The spread operator is often used in combination with destructuring.  Destructing allows for data from arrays, objects, and maps to be assigned to new variables.

3. React state: State is a built-in React object that is used to contain data or information about the component.  State allows the management changing data in an application. A component's state can change over time; whenever it changes, the component re-renders. 

4. React props: props is a  keyword in React, which short for properties. it is used to pass data from one component to another. Data being passed with props move in a uni-directional flow. Unidirectional data flow describes a one-way data flow where the data can move in only one direction when being transferred.

5. DOM events: DOM events ways to track activity on DOM, quantity of tags or presences of tags, and text in html and its relationship with DOM