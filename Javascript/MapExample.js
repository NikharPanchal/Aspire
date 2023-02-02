const mapDemo = new Map();

mapDemo.set(1, "Nikhar");
mapDemo.set(1, "Dhruv");
mapDemo.set(2, "Sams");
mapDemo.set(3, "Danny");

console.log(mapDemo);

const arr = [12, 13, 45, 56];
const arrAskey = new Map();
arrAskey.set(arr, "Found");

console.log(arrAskey.get(arr));
