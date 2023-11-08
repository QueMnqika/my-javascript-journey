// TASK 1: VARIABLES & OPERATORS

let language = 'JavaScript';
let score = 10;
let length = 10;
let width = 5;

// Area of triangle

let area = length * width;

console.log(`The area of the rectangle is ${area}`);


let num1 = 10;
let num2  = 4
let remainder = 10%4;
let divisionOutput = num1/num2;
let remainder2 = num1%num2;
let output = divisionOutput = remainder;

console.log(`The Remainder = ${remainder}`);

console.log(`The Division output is ${output}`);

// TASK 2: DATA TYPES

let array = [4, 2.5, 'Mazda', 'Hyundai'];
let person = {
    firstName: 'Que',
    lastName: 'Mnqika',
    height: 16.8,
    age: 23
}

// Array
console.log(typeof(array[0]));
console.log(typeof(array[1]));
console.log(typeof(array[2]));
console.log(typeof(array[3]));

// Object
console.log(typeof(person.firstName));
console.log(typeof(person.lastName));
console.log(typeof(person.height));
console.log(typeof(person.age));

let carsAndYear = ['X3', 'AMG', 2021, 2022]
// X3 is a string
console.log(typeof(carsAndYear[0]));

// AMG is also a string
console.log(typeof(carsAndYear[1]));

// 2021 is a number
console.log(typeof(carsAndYear[2]));

// 2022 is also a number
console.log(typeof(carsAndYear[3]));

let nada = null;
let unknown;

console.log(nada);
console.log(unknown);