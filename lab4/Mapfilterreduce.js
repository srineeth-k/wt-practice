//calculate the sum of squared odd numbers in an array using an arrow function 

let arr=[1,2,3,4,5]
let res=arr.filter((x)=>x%2===1).map((x)=>x*x).reduce((a,b)=>(a+b))
console.log(res)