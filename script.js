console.log("Pahima");
console.log(19);

let firstName = "Pahima";

console.log(firstName);
console.log(firstName);

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
console.log(myFirstJob);

//datatypes
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES!'; //Need not use 'let' while assigning again 
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);


//const and var
const birthYear = 2005; //better to use 'const' for constant variables rather that 'let'

//var almost works same as let bbut not recommended to use

var job = 'programmer';
job = 'teacher'

lastName = 'Uchil';
console.log(lastName);


//Operators
const presentYear =2025;
const myAge = presentYear -birthYear;
console.log(myAge);

//Math operators
console.log(myAge*2,myAge/4,2**4);

console.log(firstName+' '+lastName);


// Assignment operators
let x;
x += 10; 
x *= 4;// CHALLENGE -1

//BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

const massMark = 78;
const heightMark = 1.68;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn = massJohn / heightJohn ** 2 ;

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);



//////////
const currentEducation = "college student";
 
const pahima = `I am ${firstName}, a ${presentYear-birthYear} year old  ${currentEducation}`
console.log(pahima);
//Using bacticks even helps in writing multi line sentences

console.log(`I 
am a 
robot`)


const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving ');
} else {
  const yearsLeft = 18 - age;
  console.log(`Wait another ${yearsLeft} years`);
}


let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const BMIOfMark = massMark / heightMark ** 2 ;
const BMIofJohn = massJohn / heightJohn ** 2 ;

if(BMIOfMark>BMIofJohn){
    console.log(`Marks BMI (${BMIMark}) is greater than John's (${BMIJohn})`);
}else if(BMIOfMark<BMIofJohn){
     console.log(`Marks BMI (${BMIMark}) is lesser than John's (${BMIJohn})`)
}else{
    console.log("Both have same BMI")

}

// type conversion
const inputYear = '2005';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 20);

console.log(Number('Jonas'));
console.log(String(23), 23);

// type coercion
console.log('I am ' + 19 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //here there is '+' ,thus string is concatenated
n = n - 1; //'-' thus sub opreation takes place
console.log(n);



//There are 5 falsy values: 0,undefined,null,'',NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money =0;
if(money){                          //as money is 0,it will return false
    console.log("Dont spend all");   
}else{
    console.log("Get a job");
}


let height;                         //as height not defined....undefined is falsy value.
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


//  == vs ===

const number = 18;
if(number===18)console.log("Kuddos,number 18")  //True

const newNumber = '18'
if(number === 18)console.log("Kuddos,number 18") //False

if(number == 18)console.log("Kuddos,number 18") //True
/* It is because  === does strict comarision,whereas == does loose comparision.
in '==' type Coercion is done */




const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { 
  console.log(' 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

//logical operators
const hasDriversLicense = true; 
const hasGoodVision = true; 

const isTired = false; 
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

//Challenge - 3

const avgDolphins = (96+108+89)/3;
const avgKoalas = (88+91+110)/3;
if(avgDolphins>avgKoalas && avgDolphins>=100)console.log(`Dolphins win the trophy`);
else if(avgDolphins<avgKoalas && avgKoalas>=100) console.log(`Koalas win the trophy`);
else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100)console.log(`Both win the trophy!`);
else console.log(`No one wins the trophy`);