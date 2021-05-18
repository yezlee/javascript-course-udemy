//LECTURE: Values and Variables
const country = 'Korea';
const continent = 'Asia';;
let population = 52;

// console.log(country);
// console.log(continent);
// console.log(population);

//LECTURE: Data Types
const isIsland = false;
let language;

// console.log(typeof isIsland, typeof population, typeof country, typeof language);

//LECTURE: let, const and var
language = 'Korean';
//isIsland = true; //Uncaught TypeError: Assignment to constant variable.

//LECTURE: Basic Operators
// console.log(population / 2);
population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);

const description = country + ' is in ' + continent + ', and its '+ population + ' million people speak ' + language;

// console.log(description);

//LECTRUE: Strings and Template Literals
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description2);

//LECTURE: Taking Decisions: if / else Statements
// if(population > 33){
//     console.log("Korea's population is above average");
// }else{
//     console.log(`Korea's population is ${33 - population} million below average`);
// }

//LECTURE: Type Conversion and Coercion
// console.log('9' - '5'); //4
// console.log('19' - '13' + '17'); //617
// console.log('19' - '13' + 17); //23
// console.log('123' < 57); //false
// console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

//LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if(numNeighbours === 1){
//     console.log('Only 1 border!')
// }else if(numNeighbours > 1){
//     console.log('More than 1 border.')
// }else{
//     console.log('No borders.')
// }


//LECTURE: Logical Operators
// const speakEnglish = false;
// const lessThan50MPeople = false;
// const notAnIsland = true;

// if(speakEnglish && lessThan50MPeople && notAnIsland){
//     console.log('You should live in Korea :)')
// }else{
//     console.log('Korea does not meet your criteria.')
// }

// if(language === 'Korean' && population < 60 && !isIsland){
//     console.log(`You should live in ${country} :)`)
// }else{
//     console.log(`${country} does not meet your criteria.`)
// }

