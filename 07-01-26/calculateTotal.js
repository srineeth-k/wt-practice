// function calculateTotal that takes an arbitrary number of numeric values (using the rest operator) and returns their sum.

function calculateTotal(...num){
    return num.reduce((acc,curr)=>acc+curr,0);
}

console.log(calculateTotal(10,20,30,40));
