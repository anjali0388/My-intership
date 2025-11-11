// spread /Rest practice
const fruit=["apple","mango","banana"];
const morefruits=["chhery","mango"];
const allfruits=[...fruit,...morefruits];
console.log(allfruits);
function sum(...numbers){
    return numbers.reduce((acc,next)=>acc+next,0)
}
console.log(sum(1,2,3,4))