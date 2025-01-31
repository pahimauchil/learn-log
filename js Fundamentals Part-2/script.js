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

 //friends =["bob","alice"] //we cannot change an entire array,can only change elements
const firstName ='Pahima';
 const Pahima= [firstName,'Uchil',2037-2005,'student',friends];
//can store another variable ,array and also solve expressions in an array.

console.log(Pahima);
console.log(Pahima.length);

//to calculate age of elements of the array
const calcAge =function (birthYear){
  return 2037 -birthYear;
}

const yearss = [1990,1993,1934,2005,2013];
const agee1 = console.log(calcAge(yearss[0]));

//we can also put function calls in an array
const ages = [calcAge(yearss[0]),calcAge(yearss[1]),calcAge(yearss[3]),calcAge(yearss[yearss.length-1])]
console.log(ages);

//ARRAY METHODS

//Add Elements
// const friends = ['Steve','Michael','Peter'];
friends.push('Harry'); //inserts an element at the end
console.log(friends);

friends.unshift('John'); //inserts element at the beginning of the array
console.log(friends);


//Remove Elements
friends.pop(); //Removes the last element
const popped = friends.pop(); //can also store popped element and display it
console.log(popped);
console.log(friends);

friends.shift(); //Removes first element
console.log(friends);


//To check what postion an element is in,returns index
console.log(friends.indexOf('Steve'));

console.log(friends.includes('Steve')); //checks if element is present or not returns T/F

if(friends.includes('Steve')){
  console.log(`You have a friend called Steve`);
}

//CHALLENGE -2 
// const calcTip = function (bill){
//    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(total);
// console.log(bills,tips,total);


//Objects

const harry ={
  firstName :'Harry',
  lastName :'Potter',
  age:2027-2000,
  friends:['Ron','Hermione'],
};

console.log(harry);
//dot operator is used to access the properties
console.log(harry.lastName);
// OR
console.log(harry['lastName']);

const nameKey = 'Name';
console.log(harry["first"+nameKey]);
console.log(harry["last"+nameKey]);
//above can't be done using dot operator

// const InterestedIn = prompt(`What do you want to know at Harry?`);

// if(harry[InterestedIn]){
//   console.log(harry[InterestedIn])

// }else{
//     console.log(`Wrong request`);  
// }

harry.location = 'Protugal';
//or
harry['twitter'] = '@harry';
console.log(harry);

console.log(`${harry.firstName} has ${harry.friends.length} friends, and his best friend is called ${harry.friends[0]}`);


//Object Methods
//we can also put functions inside a object (using function expressions)
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
//   calcAge :function(){
//    const age = 2037 - birthYear;
//     return age;
//   }
// };
// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));
//Above we have the birthyear as a property need not provide again
//can refer to it by using this keyword.

calcAge :function(){
  const age=2025 - this.birthYear;
  return age;
},
getSummary:function(){

  return console.log(`${this.firstName} is a ${this.calcAge()}- year old ${this.job} and he has ${(this.hasDriversLicense?'a':'no')} drivers license`)
}
};

console.log(jonas.calcAge()); 
console.log(jonas.getSummary());

//by doing below the function creates a new property age and saves it and while calling we can directly call the property age
/*
calcAge :function(){
   this.age = 2025 - this.birthYear;
  return this.age;
}
};
console.log(jonas.age);
*/

//CHALLENGE - 3

const Mark = {
  fullName:'Mark Miller',
  mass: 78,
  height:1.69,
  calcBMI:function(){
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};

const John = {
  fullName:'John Smith',
  mass: 92,
  height:1.95,
  calcBMI:function(){
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};
Mark.calcBMI();
John.calcBMI();

if(Mark.BMI>John.BMI){
  console.log(`${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s (${John.BMI})!`);
}else if(John.BMI>Mark.BMI){
  console.log(`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s BMI (${Mark.BMI})!`);
}


//Loops

for(let rep =1;rep<=10;rep++){
  console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray =[
  'Jonas',
  '2025-1991',
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types =[];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  // types[i] = typeof jonas[i];
  types.push(typeof jonasArray[i]);
  
}

console.log(types);

const birthYears =[1991,1934,1936,1999];

const agess =[];
for(let i=0;i<birthYears.length;i++){
  // agess[i]=2025-birthYears[i];
  agess.push(2025-birthYears[i]); 
}
console.log(agess);


console.log(`~~~~~Only Strings~~~~~~~`)
for(let i=0;i<=jonasArray.length;i++){
  if(typeof jonasArray[i]!=='string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// console.log(`~~~~~Break with Numbers~~~~~~~`)
// for(let i=0;i<=jonasArray.length;i++){
//   if(typeof jonasArray[i]!=='number') break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

//Backward Looping

for(let i=jonasArray.length-1;i>=0;i--){
  console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

//While loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} `);
  rep++;
}

let dice =Math.trunc(Math.random() * 6)+1;
console.log(dice)

while(dice!==6){
  console.log(`You rolled a ${dice}`);
  dice =Math.trunc(Math.random() * 6)+1;
}
if(dice===6)console.log('Loop is about to end..');

// CHALLENGE - 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for(let i=0;i<bills.length;i++){
   const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calculateAverage([2, 3, 7]));
console.log(calculateAverage(totals));
console.log(calculateAverage(tips));