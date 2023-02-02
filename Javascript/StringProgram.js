//Convert first character in to uppercase
const str = 'hello my name is nikhar';

const split_str = str.split(' ');
console.log(split_str);

const result_string = [];

for (const i of split_str) {
    result_string.push(i[0].toUpperCase() + i.slice(1));
}

console.log(result_string.join(' '));

const pad_demo = "hello";

console.log(pad_demo.padStart(12, '+'));