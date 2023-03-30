// create object using literals
const player = {};
player.name = 'Small Nirob';
player.specialty = 'batsman';
player.bat = function () {
    console.log('Swing the bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'Pandy',
    job: 'Khai Andy',
    ball: function () {
        console.log('Throw the ball');
    },
    salary: 10000,
}

// Object constructor
const person = new Object();
// console.log(person); // Will get empty object

// Object create method
const item = Object.create(null);
console.log(item);
const atel = Object.create(student);
// console.log(atel.name);

class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(60);
console.log(person1);

// function

function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);