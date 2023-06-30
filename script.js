'use strict';
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();
// //IIFE
// (function () {
//   console.log("This will never run again");
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);
// (() => console.log("This will also never run again"))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

//Closure
// const secuteBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secuteBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

//Example1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// h();
// f();
// console.dir(f);

// //Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are all boarding all ${n} passengers `);
//     console.log(`We are 3 groups, each with ${perGroup} passengers `);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);

//Challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
