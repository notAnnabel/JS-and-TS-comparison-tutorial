// LOGGING OBJECTS

// 1. Create a constant person object with name 'Mary' and age 25
const person1 = {
  name: "Mary",
  age: 25,
};

// 2. Create a constant person object with name 'Mark' and age 22
const person2 = {
  name: "Mark",
  age: 22,
};

// 3. Create a function that logs a the person's name and age
function logPerson(person: { name: string, age: number }) {
  console.log(`name: ${person.name}`);
  console.log(`age: ${person.age}`);
}

// 4. Use the function to log Mary's details
logPerson(person1);

// 5. Use the function to log Mark's details
logPerson(person2);
