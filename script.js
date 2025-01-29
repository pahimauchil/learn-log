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
const birthYear = 1991; //better to use 'const' for constant variables rather that 'let'

//var almost works same as let bbut not recommended to use

var job = 'programmer';
job = 'teacher'

lastName = 'Uchil';
console.log(lastName);


//Operators
const presentYear =2027;
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


