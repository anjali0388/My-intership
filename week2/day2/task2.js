const expenses=[
    
        {category:"food",amount:300},
        {category:"Transport",amount:150},
        { category:"shoping",amount:400},
    
];
const allTotal=expenses.reduce((acc,next) => acc+next.amount,0);
console.log(allTotal)