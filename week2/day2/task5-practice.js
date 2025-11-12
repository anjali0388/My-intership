const employees=[
    { name:"anjali", salary:28000},
    { name:"mukan", salary:22000},
    { name:"laxmi", salary:35000},
    { name:"ritika", salary:18000},
];
const employesalary= employees.filter(employees=> employees.salary>25000);
//console.log(employesalary);


   const bonus = employesalary.map(emp=>({ name:emp.name,finalSalary:emp.salary+2000}));
   console.log(bonus)
bonus.forEach(emp=>{
 console.log(  ` ${emp.name} : ${emp.finalSalary}`)
});
   
const Totalsalary=bonus.reduce((acc,emp)=> acc+emp.finalSalary,0)
console.log( "totalsalary",Totalsalary);
const average=Totalsalary/bonus.length;
console.log(`average:${average}`)