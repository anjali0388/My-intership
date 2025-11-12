//double each number
const number=[2,4,6,8];
const doubled=number.map(num=>num*2);
console.log(doubled);

//Extrack names from objects
const users=[
    {name:"anjali",marks:900},
    {name:"anjali",marks:900},
    {name:"anjali",marks:900},
]
const arr1=users.map(emp=>({name:emp.name,marks:emp.marks}))
 arr1.forEach(emp=>{
console.log(`${emp.name}, :${emp.marks}`)});
