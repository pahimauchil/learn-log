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

 const avgDolphins = calcAverage(44,23,71);
 const avgKoalas = calcAverage(85,5,41);   

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

