'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534;



///////////////////////////////////////
// 33. Functions
function logger(){
    console.log('My name is Yeseul');
}

//calling / running / invoking function 
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice =  `Juice with ${apples} apples and ${oranges} oranges.`;
    console.log(juice);
    return juice;
}

console.log(fruitProcessor(5, 0));
//or
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


///////////////////////////////////////
// 34. Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
  
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
  
console.log(age1, age2);


///////////////////////////////////////
// 35. Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); //46

const yearsUntilRetirement2 = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement; 
}
console.log(yearsUntilRetirement2(1991)); //19

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); //Jonas retires in 19 years
console.log(yearsUntilRetirement(1980, 'Bob')); //Bob retires in 8 years

///////////////////////////////////////
// 36. Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(65,54,49);
// const scoreKoalas = calcAverage(23,34,27);

// console.log(scoreDolphins);
// console.log(scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas){
//   if(avgDolphins >= avgKoalas * 2){
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   }else if(avgKoalas >= avgDolphins * 2){
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   }else{
//     console.log(`No one wins.`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);


// //answer
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

/*
///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Literal syntax - the way that we use the most
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); // (3) ['Michael', 'Steven', 'Peter']

//Another way to make array
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear){
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];

console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends); // (4) ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4

friends.unshift('John'); 
console.log(friends); // (5) ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

*/
///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀


let tip;

function calcTip(bill){

  if(50 <= bill && bill <= 300){
    tip = bill * 0.15;
  }else{
    tip = bill * 0.2;
  }

  return tip;
}

//the other way to make function
const calcTip = function(bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips =  [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips[0],tips[1],tips[2]);
conosole.log(tips);

const total = [];
console.log(bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2] )



///////////////////////////////////////
//42. Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

//object
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
//43. Dot vs. Bracket Notation


console.log(jonas.lastName);
console.log(jonas['lastName']);
//these two are working exactly same but the difference is we can put ant expression inside [] bracket notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// console.log(jonas.interestedIn); //undefined
// console.log(jonas[interestedIn]); // inside of [] this, I can put expression, interestedIn, and it will change to job. So, jonas['job']

//undefined is a falsy value. So we can use that for if-statement
if(jonas[interestedIn]){
  console.log(jonas[interestedIn]);
}else{
  console.log("Wrong reqest!");
}

jonas.location = "Portugal";
jonas['twitter'] = '@jonasshmedtman';
console.log(jonas);

//Challenge
// "Jonas has 3 friends, and his friend is called Michael"

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


///////////////////////////////////////
// 44. Object Methods
const jonas = {
  firstName : 'Jonas',
  lastName : 'Schmedtmann',
  birthYear : 1991,
  job : 'teacher',
  friends : ['Michael', 'Peter', 'Steven'],
  hasDriverLicense : true,

  // 'calcAge': function(birthYear){
  //   return 2037 - birthYear;
  // }

  calcAge : function(){
    this.age = 2037-this.birthYear;
    return this.age
  },
  
  getSummary : function(){
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license.`
  }
};

// const calcAge   = function(birthYear){
//   return 2037 - birthYear;
// }

console.log(jonas.calcAge(5345));
console.log(jonas['calcAge']());
console.log(jonas.job);
console.log(jonas['job']);
console.log(jonas.birthYear);
console.log(jonas['birthYear']);

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge - write a method called getSummary, this method should return a string which should kinda summarize the data about Jonas.
// "Jonas is a 46-years old teacher and he has a driver license"

console.log(jonas.getSummary());

*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀


const mark = {
  fullName : 'Mark Miller',
  mass : 68,
  height : 1.69,
  calcBmi : function(){
    this.bmi = this.mass / this.height ** 2; //Exponentiation 누승법 (**)
    return this.bmi;
  }
}

const john = {
  fullName : 'John Smith',
  mass : 92,
  height : 1.95,
  calcBmi : function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}


if(mark.calcBmi() > john.calcBmi()){
  console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}else if(john.bmi > mark.bmi){
  console.log(`${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}else{
  console.log(`They hava same BMI! ${mark.fullName}'s : ${mark.bmi} , ${john.fullName}'s : ${john.bmi}`)
}

*/
/*
///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

*/
///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}
