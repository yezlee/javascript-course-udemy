/*
// Linking a JavaScript File
let js = "amazing";
if (js === 'amazing') alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27; // it is okay for a variale name

// Variable name can only contains numbers, letters, underscores, the dollar sign

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun); //true

// console.log(typeof true);
console.log(typeof javascriptIsFun); //boolean
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); //string

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3 );
// 2 ** 3 means 2 to the power of 3
// 2 * 2 * 2

const firstName = "Yeseul";
const lastName = 'Lee';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // there are two operators, and the plus operator is executed before the assignment operator. - why? Next video

x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1 
x--; // x = x - 1 
console.log(x);


// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


////////////////////////////////////
// Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


//TEST DATA 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


//TEST DATA 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / heightJohn2 ** 2;
console.log(BMIMark2, BMIJohn2);

markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2);


////////////////////////////////////
// 17. Strings and Template Literals

const firstName = 'Yez';
const job = 'developer';
const birthYear = 1990;
const year = 2037;

const yez = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(yez);

const yezNew = `I'm ${firstName}, a ${year - birthYear } year old ${job}!`;
console.log(yezNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

*/

////////////////////////////////////
// 18. Taking Decisions : if / else Statements

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('Sarah can start driving license 🐱‍🏍🚗');
}

if(age >= 18) {
    console.log('Sarah can start driving license 🐱‍🏍🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, Wait another ${yearsLeft} years ✌`);
}

const birthYear = 1990;
let century;

if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}

console.log(century);