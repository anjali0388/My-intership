const scores=[45,80,90,35,60,75]
const PassingScores=scores.filter(scores=>scores>=50);
const bonusScores=scores.map(score=>score+10);
const Total= scores.reduce((acc,next)=>acc+next,0);
console.log(PassingScores);
console.log(bonusScores);
 console.log(Total);