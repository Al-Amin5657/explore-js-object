const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
// const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);

// const twoDimension = [
//     [ 'color', 'yellow' ],
//     [ 'price', 50 ],
//     [ 'isCleaned', true ],
//     [ 'capacity', 1 ]
//   ]

console.log(bottle);
Object.seal(bottle);
// Object.freeze(bottle);
delete bottle.isCleaned
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

const nayok = { name: 'hero', age: '28', isMarried: false };
const keyValue = Object.entries(nayok)
console.log(keyValue);

const obj = { a: 1, b: 7, c: 3, length: 2 };
console.log(Object.keys(obj).length);

const obj1 = { module: 35, video: 2 };
const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina") => "name"; console.log(getGirlFriend()); 