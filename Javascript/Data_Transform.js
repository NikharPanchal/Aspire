//Map function in array
sqrt_arr = [4, 16, 121, 49, 25];

const map_data = sqrt_arr.map(data => Math.sqrt(data));

console.log(map_data);

//Filter function in array
const arr = [10, 23, 4, 3, 5, 24, 34];

const filter_result = arr.filter(a => a > 10);

console.log(filter_result);

//Reduce method in array
const total = arr.reduce((acc, mov, i, arr) => {

    return acc + mov;

}, 0)

console.log(total);

//Flat method in array
const arr_flat = [[1, 43, 4], 5, [56, 9, 5], [6, 4, 2], 3, 6, [7]];

console.log(arr_flat.flat());

//Fill method in array
const arr_fill = new Array(10);

arr_fill.fill(3, 2, 6);

arr_fill.fill(9, 0, 2);

arr_fill.fill(10, 6, 10);

console.log(arr_fill);