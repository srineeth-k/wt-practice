// arrow function to check if a given string is a palindrome

const isPalindrome=(str)=>{
   return str===str.split("").reverse().join("")
}

console.log(isPalindrome("acecar"))

