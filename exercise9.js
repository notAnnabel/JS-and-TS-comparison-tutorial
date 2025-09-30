// CONDITIONALS IN FUNCTIONS

// 1. Create a function with a boolean parameter that logs "Hello World" when the parameter is true and "Goodbye World" when the parameter is false
function logIfTrue(value) {
  if(value) console.log("Hello World");
  else console.log("Goodbye World");
}

// 2. Create a let boolean named print set to true
let print = true;

// 3. Execute logIfTrue with that boolean as parameter
logIfTrue(print);

// 4. Change the boolean to false
print = false;

// 5. Execute logIfTrue with that boolean as parameter 
logIfTrue(print);