const country = new Array('India', 'Australia', 'USA', 'Shrilanka');
console.log(country);

country[1] = "China";
console.log(country);
console.log(country.length);

country.push("England");
console.log(country);

country.unshift("Netherland");
console.log(country);

country.pop();
console.log(country);

country.shift();
console.log(country);
