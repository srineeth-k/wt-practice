// program to count the number of vowels in a string using an arrow function.

const count=(str)=>{
    let count=0
    for(let s of str.split("")){
        if("aeiouAEIOU".indexOf(s)!==-1){
            count++
        }
    }
    return count
}

let arr=["srineeth","pavan","vamshi"]

for(a of arr){
    console.log(`Number of vowels in ${a} is ${count(a)}`)
}