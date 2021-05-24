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
*/

///////////////////////////////////////
// 34. Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
  
// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);
  
console.log(age1, age2);
  