//data transformation with map() and filter()
const prices=[120,250,300,450,600];
const filter=prices.filter(prices=> prices>=250);
const map=prices.map(price=>price-price*0.10);
const reduse=prices.reduce((acc,next)=>acc+next,0);
console.log("original prices",prices);
console.log("filterd prices(>250)",filter)
console.log("10% discount(10%)",map);

