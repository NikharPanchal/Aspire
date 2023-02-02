const empData = {
    fname: 'Nikhar',
    lname: 'Panchal',
    age: 2023 - 2000,
    nationality: 'India',
    friends: ['John', 'Riya', 'Denvar', 'Tokyo']
};

console.log(empData.fname);
console.log(empData.lname);
console.log(empData.age);
console.log(empData.nationality);
console.log(empData.friends)

const choise = prompt("Choose between fname, lname, age, nationality and friends");

if (empData[choise]) {
    console.log(empData[choise]);
} else {
    console.log(`${choise} is not exists...try another`);
}