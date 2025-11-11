//variable scopping & this 
// let name ="anjali";
// function greet()
// {
//     let name=  "muskan"
//     console.log("inside function ",name)
    
// }
// greet()
// console.log("outside the function",name)


//this keyword
// const user ={
//     name:"anjli",
//     sayhello :function()

// {
//     console.log(`hello i am ${this.name}`)
// }
// };
// user.sayhello();


// distructuring array & object
// const student={name:"anjali", age:20, course:"bca"};
// const {name,age,course}=student
// console.log(name);
// console.log(age);
// console.log(course);


// array distructring
 const colors=["red","green","blue"];
const[first,,third]=colors;
console.log(first);
console.log(third);


// Spread & rest operator
const arr1=[1,2];
const arr2=[3,4];
const combined=[...arr1,...arr2];
console.log(combined)

// rest operator
function sum(...number){
    return number.reduce((acc,num)=> acc+num,0);
}
console.log(sum(8,9,9));

//Tamplate literals
const user="anjali";
const message=`heloo,${user} have a great day !`;
console.log(message);
//shorted object
const title="abc";
const clr ="color";
const obj={title,clr};
console.log(obj);