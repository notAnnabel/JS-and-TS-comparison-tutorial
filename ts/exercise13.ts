// TYPING FUNCTIONS

// This is a possible type for person:
type Person = {
    name: string,
    age: number,
    gender: "F"|"M"|"NB"|"other";
};
// type can be used in any file, unlike interface

// 1. Create a constant person object with name 'Mary' and age 25
const human : Person={name:"Mary", age:25, gender:"F"};
// 2. Create a function that logs a the person's name and age - using the Person as type
function logging(person: Person){
    console.log(person.name)
    console.log(person.age)
    console.log(person.gender)
}
// 3. Use the function to log Mary's details
logging(human);
// 4. Modify the above code to add gender to the type person with a list of possible genders and fix all errors