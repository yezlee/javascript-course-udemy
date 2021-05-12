//LECTURE: Values and Variables
const country = 'Korea';
const continent = 'Asia';;
let population = 52;

console.log(country);
console.log(continent);
console.log(population);

//LECTURE: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

//LECTURE: let, const and var
language = 'Korean';
//isIsland = true; //Uncaught TypeError: Assignment to constant variable.

//LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description = country + ' is in ' + continent + ', and its '+ population + ' million people speak ' + language;

console.log(description);


