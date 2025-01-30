// "use strict" enables strict mode in JavaScript, which helps catch common coding mistakes,  
// prevents the use of undeclared variables, and makes the code more secure and reliable.
'use strict';

let hasDriversLicense = false;
const passTest = true;
// if (passTest) hasDriverLicense = true;  here using 'use strict' notifies us about the mistakes
if (passTest) hasDriversLicense = true;   //corrected
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;
//it also notifies us in the console when we assign something to keywords.


//Functions

function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();



function fruitProcessor(apples,oranges){
    const juice =`Juice of ${apples} apples and ${oranges} oranges`;
    return juice;
}
const fruitJuice = fruitProcessor(5,10);
console.log(fruitJuice);
console.log(fruitProcessor(5,10));


//function declaration vs function expressions
//Function declaration
function calcAge1(birthYear){
    return 2027-birthYear;
}
const age1 = calcAge1(2000);


//Function expression
const calcAge2 =function (birthYear){
    return 2027 -birthYear;
}
const age2 = calcAge1(2000);


console.log(age1,age2);


//Arrow Function
const calcAge3 = birthYear=> 2027-birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUnitlRetirement = (birthYear,firstName)=>{
    const age4 = 2025-birthYear;
    const retirement = 65 - age4;
    return `${firstName} retires in ${retirement} years from now`;
}
console.log(yearUnitlRetirement(2000,'Riya'));

//Functions calling another function

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



const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge1(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired `);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Roy'));


//CHALLENGE - 1

const calcAverage = (a,b,c)=>(a+b+c)/3;

 let avgDolphins = calcAverage(44,23,71);
 let avgKoalas = calcAverage(85,5,41);   

 const checkwinner = function(avgDolphins,avgKoalas){
    if(avgDolphins>=(2*avgKoalas)){
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} )`);
    }else if(avgKoalas>=(2*avgDolphins)){
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins} )`);
    }else{
        return console.log(`No teams win`);
    }
 }
 checkwinner(avgDolphins,avgKoalas);
 checkwinner(576,111);

 //Arrays

const friends = ['Steve','Michael','Peter'];
console.log(friends);

 //another way 
const y =new Array(190,192,193);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

  //to get last element of array

 console.log(friends[friends.length - 1]);

 //changing a value in array
 friends[3] = 'Jay';
 console.log(friends);

 const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const ages1 = calcAge(years[0]);
const ages2 = calcAge(years[1]);
const ages3 = calcAge(years[years.length - 1]);
console.log(ages1, ages2, ages3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Basic Array Operations 
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); 
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
