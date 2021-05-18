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
*/

////////////////////////////////////
// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const averageDolphins = (96 + 108 + 89)/3;
// const averageKoalas = (88 + 91 + 110)/3;

// if(averageDolphins > averageKoalas){
//     console.log(`Team Dolphins(${averageDolphins}) wins!`);
// }else if(averageDolphins === averageKoalas){
//     console.log('It is a draw.');
// }else{
//     console.log(`Team Koalas(${averageKoalas}) wins!`);
// }

// BONUS 1
// const averageDolphins = (97 + 112 + 101)/3;
// const averageKoalas = (109 + 95 + 123)/3;
// console.log(averageKoalas, averageDolphins);

// if(averageDolphins > averageKoalas && averageDolphins >= 100){
//     console.log(`Team Dolphins(${averageDolphins}) wins!`);
// }else if(averageDolphins < averageKoalas && averageKoalas >= 100){
//     console.log(`Team Koalas(${averageKoalas}) wins!`);
// }else if(averageDolphins === averageKoalas){
//     console.log('It is a draw. Both win!');
// }else{
//     console.log('No one wins.')
// }

//BONUS 2
// const averageDolphins = (97 + 112 + 11)/3;
// const averageKoalas = (109 + 95 + 16)/3;
// console.log(averageKoalas, averageDolphins);

// if(averageDolphins > averageKoalas && averageDolphins >= 100){
//     console.log(`Team Dolphins(${averageDolphins}) wins!`);
// }else if(averageDolphins < averageKoalas && averageKoalas >= 100){
//     console.log(`Team Koalas(${averageKoalas}) wins!`);
// }else if(averageDolphins === averageKoalas && averageKoalas >= 100 && averageDolphins >= 100){
//     console.log('It is a draw. Both win!');
// }else if(averageDolphins === averageKoalas && averageKoalas >= 100 && averageDolphins >= 100){
// }else{
//     console.log('No one wins.')
// }


/*
////////////////////////////////////
// 26. The switch Statement
const day = 'tuesday';

switch(day) {
    case 'monday': 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D')
        break;
    default:
        console.log('Not a valid day!');
}

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D')
}else{
    console.log('Not a valid day!');
}


////////////////////////////////////
// 27. Statements and Expressions
3 + 4  //Expression
1991   //Expression
true && false && !false   //Expression

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);


////////////////////////////////////
// 28. The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

*/


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let tip;
const bill = 500;
const final = 50 <= bill && bill <= 300 ? (tip = bill*0.15) + bill : (tip = bill*0.2) + bill;

console.log(final);



