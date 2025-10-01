// CREATING TYPES

// This is a type. Elements of type ab can either take the form of 'a' or 'b' 
type ab = 'a' | 'b';

// You can assign a type to a variable like we do it for functions. 
// It is optional, but it can help us be strict
const a : ab = 'a';

// 1. Create a variable of type ab which takes the form 'b''

//2. Do the same with double quotations

//3. Now try to assign 'c'to a variable of type ab

// you should get error: "Type '"c"' is not assignable to type 'ab'."