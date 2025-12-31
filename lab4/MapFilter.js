//program that takes an array of integers as input. Use arrow functions to perform the following tasks:
//  Double the values of each element in the array.
//  Filter the doubled values to include only the numbers greater than 20.
//  Return the resulting filtered array as output.

const arr=[3,5,10,20,34];
const result=arr.map(x=>x*2).filter(x=>x>=20)
console.log(result);