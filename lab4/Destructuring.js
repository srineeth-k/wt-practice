//program to implement Object Destructuring Array Destructuring Destructuring with renaming Destructuring with function  Destructuring with Rest operator

// Object Destructuring
const user = { name: "Bala", age: 18 };
const { name, age } = user;
// Array Destructuring
const arr = [10, 20, 30];
const [a, b] = arr;
// Renaming
const { name: userName } = user;
// Function Destructuring
const display = ({ name, age }) => console.log(name, age);
display(user);
// Rest Operator
const [x, ...rest] = arr;

