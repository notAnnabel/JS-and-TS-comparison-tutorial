// CREATING TYPES

// This is a type. Elements of type ab can either take the form of 'a' or 'b' 
type ab = 'a' | 'b';

// 1. Create a variable of type ab which takes the form 'a''
const a : ab = 'a';

//2. Do the same with double quotations
const a2 : ab = "a";

//3. Now try to assign 'c'to a variable of type ab
const c : ab = 'c'

// you should get error: "Type '"c"' is not assignable to type 'ab'."