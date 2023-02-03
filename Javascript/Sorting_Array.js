const str = ["cat", "dog", "elephant", "horse"];

console.log(str.sort());

const arr = [23, 35, 7, 4, 10, 45, 2, 19];

console.log(arr);
arr.sort((a, b) => {
    if (a > b) {
        console.log("1.", a, b);
        return 1;
    }
    else {
        console.log("2.", a, b);
        return -1;
    }
});

console.log(arr);

