const days_Set = new Set([
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'monday',
    'Saturday',
    'Sunday'
]);

console.log(days_Set);
console.log(days_Set.size);
console.log(days_Set.add('Thursday'));
console.log(days_Set.delete('Thursday'));
console.log(days_Set.has('Sunday'));

let animal_lower = new Array();
const animal = ['Dog', 'Cat', 'dog', 'Elephant', 'cow'];
for (let i = 0; i < animal.length; i++) {
    animal_lower[i] = animal[i].toLowerCase();
}
const animal_set = new Set(animal_lower);
console.log(animal);
console.log(animal_set);