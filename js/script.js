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

// TASK 3: FUNCTIONS AND CONDITIONAL STATEMENTS

let rands = 1000;

function toDollars(dollars) {
    return rands*dollars
}

console.log(`R1000 is equal to $${toDollars(0.054)}`);

function toEuros(euros) {
    return rands*euros
}

console.log(`R1000 is equal to €${toEuros(0.051)}`);

function toPounds(pounds) {
    return rands*pounds
}

console.log(`R1000 is equal to £${toPounds(0.044)}`);


let value = 400;
let vat = 15/100;
let vatValue = vat * value;

let calculate = () => {
   return value + vatValue
}

console.log(`The amount after tax is R${calculate()}`);

let firstNum = 8;
let secondNum = 20;
let thirdNum = 14;
let oddNum = firstNum%2

let compare = () => {
    if (firstNum < secondNum) {
       console.log(`The larger nummber is ${secondNum}`);
    }
}

compare();

let results = (firstNum) => {
     if (oddNum != 0) {
        console.log(`1stNum is not an even number`);
    } else {
        console.log(`1stNum is an even number`);
    }
}

results();

if (firstNum>secondNum && firstNum>thirdNum) {
    console.log('error');
}else if (secondNum > firstNum && secondNum > thirdNum) {
    console.log(`${secondNum}, ${thirdNum}, ${firstNum}`)
}else if (thirdNum > firstNum && thirdNum > secondNum) {
    console.log('error');
}else{
    console.log('Please try again');
}