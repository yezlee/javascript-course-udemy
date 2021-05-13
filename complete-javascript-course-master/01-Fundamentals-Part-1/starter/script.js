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
*/
/*
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
*/

////////////////////////////////////
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK 😀



//1
if(BMIMark > BMIJohn){
    console.log("Mark's BMI is higher than John's!");
}else{
    console.log("John's BMI is higher than Mark's!");
}

//2
if(BMIMark > BMIJohn){
    console.log(`Mark's(${BMIMark}) BMI is higher than John's BMI(${BMIJohn})!`)
}else{
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`)
}
*/
/*
////////////////////////////////////
// 20. Type Conversion and Coercion

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //NaN - Stands for Not a number. Which means invalid number.
console.log(typeof NaN); // number - which means the type of not a number is actually number. It's still a number of somehow, but it's an invalid one.

console.log(String(23), 23);

//Type Coercion
console.log(' I am ' + 23 + ' years old'); 
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2'); //46
console.log('23' / '2'); //11.5
console.log('23' > '2'); //true

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); // 10
console.log(2+3+4+'5'); // '95'
console.log('10'-'4'-'3'-2+'5'); // '15'



////////////////////////////////////
// 21. Truthy and Falsy Values

// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;
if(money){
    console.log("Don't spend it all!");
}else{
    console.log("You should get a job.");
}

let height;
if(height){
    console.log('Yay, Height is defined!');
}else{
    console.log('Height is UNDEFINED.');
}

let height2 = 0; //Height is UNDEFINED. Which is wrong!
if(height){
    console.log('Yay, Height is defined!');
}else{
    console.log('Height is UNDEFINED.');
}



////////////////////////////////////
// 22. == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

*/

////////////////////////////////////
// 23. Boolean Logic
// 24. Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}



