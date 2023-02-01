for (let i = 0; i < 10; i++) {
    console.log(i);
}

let str = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);