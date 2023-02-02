//Map function in array
sqrt_arr = [4, 16, 121, 49, 25];
const map_data = sqrt_arr.map(function (data) {
    return Math.sqrt(data);
});

console.log(map_data);

//Filter function in array
const arr = [10, 23, 4, 3, 5, 24, 34];

const filter_result = arr.filter(a => a > 10);

console.log(filter_result);

//Reduce method in array
const total = arr.reduce((acc, mov, i, arr) => {
    console.log(arr);

    return acc + mov;

}, 0)

console.log(total);