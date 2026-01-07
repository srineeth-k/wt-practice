//iven multiple objects representing user details and preferences. Write a function mergeUserData that merges all the objects into one using the spread operator

function mergeUserData(...object){
    return Object.assign({}, ...object)
}

const userDetails = {name: 'CVR', age: 25}
const userAddress = {address:'Magalpally', city:'Hyderabad'}
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}

console.log("Merged Object: ",mergeUserData(userDetails,userAddress,userPreferences))