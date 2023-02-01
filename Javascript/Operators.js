
//Spread Operator
console.log("Spread Operator");
const arr = [1, 2, 3, 4, 5];

const newArr = [10, ...arr];
console.log(newArr);

//Nullish Operator
console.log("Nullish operator");
const sams = null ?? "hello"
console.log(sams);

const john = "0" ?? 45
console.log(john);

//Operational Chaining
console.log("Operational Chaining")
const vehical = {
    name: 'bike',
    vehical_no: 'GJ01122',
    date: {
        Expire_year: 2035,
        Purchase_info: {
            date: '23 jan',
            year: 2001,
        }
    }
}

console.log(vehical.date?.Expire_year);
console.log(vehical.date?.Purchase_info?.date);