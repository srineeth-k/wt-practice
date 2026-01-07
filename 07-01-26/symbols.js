//Symbols with same description.

const sym1 = Symbol("id");
const sym2 = Symbol("id");
const obj = {
  [sym1]: "Value1",
  [sym2]: "Value2",
};
console.log(obj[sym1]);
console.log(obj[sym2]);


// Symbol() vs Symbol.for()
const a = Symbol.for("globalKey");
const b = Symbol.for("globalKey");
console.log(a === b); // true