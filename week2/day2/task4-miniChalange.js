const students=[
    { name:"aman",marks:85},
    { name:"aman",marks:42},
    { name:"aman",marks:68},
    { name:"aman",marks:49},
];
const passStudents=students.filter(students=>students.marks>=50);
// console.log(passStudents);
const bonusMarks=passStudents.map(student=>({name:student.name,finalMarks:student.marks+5}));
//console.log(bonusMarks);

bonusMarks.forEach(student => {
    console.log(`${student.name}:${student.finalMarks}`)   
 }); 
 const Totalmarks=bonusMarks.reduce((acc,student) => acc+student.finalMarks,0);
 const average= Totalmarks/bonusMarks.length;
 console.log(`class averege:${average}`)