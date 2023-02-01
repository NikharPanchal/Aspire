'use strict'
const avg1=(a,b,c)=> (a + b + c)/3;

console.log("Dolphins age are  44, 23, 71");
const dolphins_avg=avg1(44,23,71);
console.log("Dolphins average is :- "+dolphins_avg);

console.log("Koalas age are  65, 54, 49");
const koalas_avg=avg1(65,54,49);
console.log("Koatals Average is :- "+koalas_avg);

const result=function checkWinner(dolphins_avg,koalas_avg)
{
    if(dolphins_avg>koalas_avg)
    {
        console.log("Dolphins are winner")
    }
    if(dolphins_avg<koalas_avg)
    {
        console.log("Koatlas are winner");
    }
}

result(dolphins_avg,koalas_avg);




