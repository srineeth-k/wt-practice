//function updateEmployeeDetails that takes an object representing an employee’s details and updates their role while maintaining the other properties using the spread operator

const employee = {name: 'John', role: 'Developer', age: 28,location: 'IN'}

function updateEmployee(employee){
    return {...employee,role:'Tester'}
}

console.log(updateEmployee(employee));