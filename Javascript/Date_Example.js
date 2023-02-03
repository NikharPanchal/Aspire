const cur_date = new Date();

const str_date = cur_date.toString();

console.log(str_date);

const trim_date = str_date.split(" ");

console.log(trim_date);

let str = " ";
for (const i of trim_date) {
    str = trim_date.slice(0, 4);
}

const final_str = str.toString().replaceAll(',', ' ');

console.log(final_str);