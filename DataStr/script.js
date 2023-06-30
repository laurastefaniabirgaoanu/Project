'use strict';
// const weekdays = ['mon', 'thu', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
//     console.log(
//       `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with
//     ${ing1}, ${ing2} and ${ing3}`);
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
// //Split and join
// // console.log('a+very+nice+atring'.split('+'));
// // console.log('Laura Birgaoanu'.split(' '));
// // const [fristName, lastName] = 'Laura Birgaoanu'.split(' ');
// // const newName = ['Ms.', fristName, lastName.toLocaleUpperCase()].join(' ');
// // console.log(newName);
// const passanger = 'jessica ann smith davis';

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const nam of names) {
//     // namesUpper.push(nam[0].toUpperCase() + nam.slice(1));
//     namesUpper.push(nam.replace(nam[0], nam[0].toUpperCase()));
//   }

//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('laura birgaoanu');
// //Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('Laura'.padStart(25, '+'));

// const mastCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(mastCreditCard(5612793718018));
// console.log(mastCreditCard('4567381920182'));
// //Repeat
// const message2 = 'Bad waether...All Departures Delayed... ';
// console.log(message2.repeat(5));
// const planesInline = function (n) {
//   console.log(`There are ${n} planes in line${'✈️'.repeat(n)} `);
// };
// planesInline(5);
// planesInline(3);
// planesInline(12);
//Strings
// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';
// // const lowerEmail = loginEmail.toLowerCase();
// // const trimedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);
// //Replacing
// const priceGB = '288,97EUR';
// const priceUS = priceGB.replace('EUR', '$').replace(',', '.');
// console.log(priceUS);
// const announcement =
//   'All passangers come to boarding door 23. Boarding door 23';
// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));
// // Booleans
// const plane = 'Airbus 320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));
// if (plane.startsWith('Airbys') && plane.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }
// //Practice
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocker Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const chechMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat😁');
//   else console.log('You got lucky❤️');
// };
// chechMiddleSeat('11B');
// chechMiddleSeat('23C');
// chechMiddleSeat('3E');

// const question = new Map([
//   ['question', 'What is the best pr lg in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct', 3],
//   [true, 'Correct😊'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// //Convert obj to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
// //Convert map to array
// console.log([...question]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are close!');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);
// //Example sets
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const stafUnique = [...new Set(staff)];
// console.log(stafUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size // how many unique position are
// );
// console.log(new Set('laura').size);

// //Property names
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);
// //Property values
// const values = Object.values(openingHours);
// console.log(values);
// //Entries object
// const entries = Object.entries(openingHours);
// // console.log(entries);
// //[key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }
// const days = ['mon', 'thu', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Methpd does not exist');
// //Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
// console.log(users[0]?.name ?? 'User array empty'); //test if the value on the left exists

// console.log(restaurant.openingHours.mon?.open);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 10,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovannu Rossi',
// };
// //OR assignment operatpor
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests = rest1.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// //nullish assignment operatpor(nnull or undefind)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// // rest1.owner = rest1.owner && '<Anonymous';
// // rest2.owner = rest2.owner && '<Anonymous';
// rest1.owner &&= 'Anonymous';
// rest2.owner &&= 'Anonymous';

// console.log(rest1);
// console.log(rest2);

// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// //Nullish: null and undefind (NOT 0 OR '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// console.log('-----Or------');
// // Usa any data type, return any data type, short -circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// console.log('------And-----');
// console.log(0 && 'jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('ciuperci', 'spanac');
// }
// restaurant.orderPizza && restaurant.orderPizza('ciuperci', 'spanac');

// const arr = [1, 2, ...[3, 4]]; //Spread, because on right side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // Rest, because on left side of =
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// //Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('ciuperci', 'ceapa', 'masline', 'spanac');
// restaurant.orderPizza('ciuperci');

// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArray = [1, 2, ...arr];
// // console.log(newArray);
// // console.log(...newArray);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, '', 's'];
// console.log(letters);
// console.log(...str); //J O N A S
// //Real-world example
// const ingredients = [
//   // prompt('Lets make pasta! Ingredient 1?'),
//   // prompt('Lets make pasta! Ingredient 2?'),
//   // prompt('Lets make pasta! Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);
// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del Sole',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   adress: 'Via del Sole, 21',
//   starterIndex: 1,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// //Default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(open, close);

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);
// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);
// // //Switching variables
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);
// // //Recive 2 return values from a function
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // //Nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // //Default values
// // const [p = 1, q = 1, r = 1] = [8];
// // console.log(p, q, r);

//Challenge
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const [players1, players2] = game.players;
// console.log(players1, players2);
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(players1, players2);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(draw, team1, team2);
// const printGoal = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// // printGoal('Davies', 'Muller', 'Lewandowski', 'Kimich');
// // printGoal('Davies', 'Muller');
// printGoal(...game.score);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);
// const odds = Object.values(game.odds);
// let avarage = 0;
// for (const odd of odds) avarage += odd;
// avarage /= odds.length;
// console.log(avarage);
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}...${odd}`);
// }
// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, 'Substituion'],
//   [47, 'Goal'],
//   [61, 'Substituion'],
//   [64, 'Yello card'],
//   [69, 'Red card'],
//   [70, 'Substituion'],
//   [72, 'Substituion'],
//   [76, 'Goal'],
//   [80, 'Goal'],
//   [92, 'Yellow card'],
// ]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);

// console.log(
//   `An event happened, on avarage , every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on avarage , every ${
//   time / gameEvents.size
// } minutes
// `);
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half}Half] ${min}: ${event}`);
// }
//Coding Challenge
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // console.log(text);
  // console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
underscore_case
 first_name
Some Variable
  calculate_AGE
delayed_departure
