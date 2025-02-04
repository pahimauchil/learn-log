'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order : function(startIndex,mainIndex){
      return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
  },
  orderDelivery :function({startIndex = 1,mainIndex = 0,time = '20:00',address }){ //setting default value,incase value not passed
    console.log(`Order recieved at ${time} of ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} ,was deliverd to ${address}`);
  },

  orderPasta : function(ing1,ing2,ing3){
      console.log(`Here is you pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza : function(mainIngredient,...otherIngredients ){
      console.log(mainIngredient);
      console.log(otherIngredients);
  },
};
restaurant.orderDelivery({
  time:'22:30',
  address: 'via',
  mainIndex:2,
  startIndex:2,

});




// const arr = [2,3,4];
//now if I want to assign each value of array to x,y,z respectively,need not do it manually assigning each jus do this,
// const [x,y,z] = arr; //de-structuring 

//now lets see with the restaurant properties
// let [first,second] = restaurant.categories; //This gives the first and second elements of categories
//if you want to access 3rd one or anyother and dont want 2nd,jjust leave it blank
// const[first, ,second] = restaurant.categories; //de-structuring

//SWITCHING VARIABLES
/*To exchange data
const temp = first;
second = temp;
console.log(first,second); //data exchanged
*/
//OR ELSE DIRECTLY by using prev method
// [first, second] = [second,first];

//de-structuring in nested arrays
// const nested =[2,4,[5,6]];
// const [i, ,[j,k]] = nested;
// console.log(i,j,k);  

//OBJECT DE-STRUCTURING
//by naming varible names ssame as propertry names
const{name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);
//if you don't want variable name same as property name
const {name: restaurantName,openingHours: hours,categories: tags } = restaurant;
console.log(restaurantName, hours,tags);

//DEFAULT VALUES
//Giving default values is a good practice incase it doesnt exit
const{menu = [],starterMenu: starters=[]} = restaurant;
console.log(menu,starters); //as menu is not defined in the object it will show the default value

//MUTATING VARIABLES
let a = 111;
let b = 999;
const obj={a:23, b:23, c:14};
({a,b} = obj); //just use brackets it will work
console.log(a,b);

//Nested objects

const {fri} = openingHours;
console.log(fri) //shows the 2 objects inside it
//so use this
const {fri: {open: o,close: c}} = openingHours;
console.log(o,c);


// suppose you have one array eg 
const arr = [7, 8, 9];
//you want to add some numbers before ,need not do it manually simply use
// Spread operator
const newArr = [1,2, ...arr];
console.log(newArr);
//now output will be - [1,2,7,8,9] ,the ... is spread operator

const newArray = [1,2,arr]; //doing this will not help as it will store the enitre array in 3rd position

//and also
console.log(...newArr); //will return individual elements of the array,not an array
//i.e it will return 1 2 7 8 9  not [1,2,7,8,9]

const newMenu = [...restaurant.mainMenu,'ravioli']; //Remember you are creating a new array, not changing the original
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 array
const mainStart = [...restaurant.mainMenu,...restaurant.starterMenu]

// Iterables : arrays, strings, maps, sets. But not objects.

const str = 'Pahima';
const letters = [...str ,' ', 'R'] //this gives individual elements
console.log(letters); // ['P', 'a', 'h', 'i', 'm', 'a', ' ', 'R']

//  const ingredients = [prompt(`Let's make pasta! Ingredient 1?`,prompt(`Let's make pasta! Ingredient 2?`),prompt(`Let's make pasta! Ingredient 3?`))];
//  console.log(ingredients);

//  restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
//instead of doing this,simply use spread operator

//  restaurant.orderPasta(...ingredients);


 const newRestaurant = {founededIn:1998,...restaurant,founder:'Pahima'} //This creates a new restaurant which will have all the props of the restaurant and additional stuff you add here.

const restaurantCopy = {...restaurant};
restaurantCopy.name= "Ristorante";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//SPREAD ,beacause on RIGHT side of =
// const arr = [1,2,...[3,4]];

//REST ,because on LEFT side of =
const [x,y,...others] = [1,2,3,4,5]; //this seperates array,a=1,b=2 and others =[3,4,5]
console.log(a,b,others);


const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);

const {sat,...weekdays} = restaurant.openingHours;
console.log(weekdays);


// FUNCTIONS

const add =function(...numbers){
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum += numbers[i];
  }
  console.log(sum);
}
add(2,3);
add(5,3,7,4,5);
add(4,5,6,3,3,2,8,7,6);

const num = [23,5,7];
add(...x); 


restaurant.orderPizza('mushrooms','onions','olives');
restaurant.orderPizza('mushrooms');





//Logical Operators
// Use ANY data type, return ANY data type, short-circuiting

console.log('--------OR---------');

//in || returns the 1st value if it is truthy values else checks next.
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); //true
console.log(undefined || null); // null (because both are falsy and displays the last checked value)

console.log(undefined || 0 || '' || 'Hello' || 23 || null);


// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

//instead of doing above,you can simply do this
const guests2 = restaurant.numGuests || 10;
console.log(guests2);


console.log('--------AND---------');
// AND is vise-versa of OR
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas');//'Jonas'

console.log('Hello' && 23 && null && 'jonas'); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//Nullish : null and undefined (NOT 0 or '')\
const guestCorrect  = restaurant.numGuests ?? 10;
console.log(guestCorrect);


const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name:'La Pizza',
  owner:"Giva",
}
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS'
rest2.owner &&= '<ANONYMOUS'
rest1.owner &&= '<ANONYMOUS'




//Coding Challenge -1

const game = {
  team1 : 'Bayern Munich',
  team2 :'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


const [players1,players2] = games.players;
console.log(players1, players2);


const [gk , ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);


const allPlayers = [...players1, ...players2];
console.log(allPlayers);


const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];


const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);


const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');



// Join 2 arrays
const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuu);

// Iterables: arrays, strings, maps, sets. NOT objects
const stri = 'Jonas';
const letterss = [...stri, ' ', 'S.'];
console.log(letterss);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurantt = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurantt);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);



//Looping Objects: Object Keys, Values, and Entries


const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}



if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


or (const order of ordersSet) console.log(order);


const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);
///////////////////////////////////////
// Coding Challenge - 2


for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}


/*
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


