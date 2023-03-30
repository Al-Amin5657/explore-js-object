const numbers = [24, 56, 67, 788, 90, 30];
// for (const number of numbers) {
//     console.log(number);
// }

// for of can not be used with objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
// first option to loop through an object
const keys = Object.keys(bottle);
/* 
   3 ways to read object properties
   bottle.color
   bottle['color']
   bottle[key]
*/
// for (const key of keys) {
//     console.log(key, bottle[key]);
// }

// for in loop
for (const key in bottle) {
    const values = bottle[key];
    console.log(key, values);
}

// advance
const pair = Object.entries(bottle);
console.log(pair);
for ([key, values] of pair) {
    console.log(key, values);
}