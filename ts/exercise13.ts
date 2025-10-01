// TYPING FUNCTIONS

// This is a possible type for person:
type Person = {
  name: string;
  age: number;
  gender: "F" | "nb" | "M" | "fluid";
}

// 1. Create a constant person object with name 'Mary' and age 25
const person1 : Person = {
  name: "Mary",
  age: 25,
  gender: "nb"
};

// 2. Create a function that logs a the person's name and age - using the Person as type
function logPerson(person: Person) {
  console.log(`name: ${person.name}`);
  console.log(`age: ${person.age}`);
}

// 3. Use the function to log Mary's details
logPerson(person1);

// 4. Modify the above code to add gender to the type person with a list of possible genders and fix all errors