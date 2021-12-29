'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Old way of reassigning parameters (ES5)
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', undefined, 1000);
*/

/*
const flight = 'LH234'; // PRIMITVE
const dennis = {
  // RELATIVE
  name: 'Dennis Pierins',
  passport: 2473946656,
};

const checkIn = function (flightNum, passenger) {
  // Won't change (primitive type)
  flightNum = 'LH999';
  // Will change (reference type)
  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passport === 2473946656) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, dennis);
// console.log(flight, dennis);

// Passing a primitive type to a function is the same as creating a copy outside of the function
// So the value is copied
// When we pass an object to a function, the object's values will change

const newPassport = function (person) {
  // Reference type (will change)
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(dennis);
checkIn(flight, dennis);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function (takes in a function)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// Don't call the function (the higher order function will do this) - These are called CALLBACK FUNCTIONS
transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('👋');
};

// JS uses callbacks all the time

document.body.addEventListener('click', high5);

['Dennis', 'Kevin', 'John'].forEach(high5);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Dennis');
greeterHey('Steven');

greet('Hello')('Dennis');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Yo')('dude');
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Dennis Pierins');
lufthansa.book(639, 'Sven Go');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// 'this' keyword will generate an 'undefined' error
// book(23, 'Sarah Williams');

// Call method: we called the call method, that will call the book function where
// the 'this' keyword is set to 'eurowings'
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 423, 'Dennis Pierins');
console.log(swiss);

// Apply method:
const flightData = [423, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Better to use:
book.call(swiss, ...flightData);

// Bind method (the this keyword is bound to eurowings and will not have to be called again)
// book.call(eurowings, 23, 'Sarah Williams')

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW55 = book.bind(eurowings, 55);
bookEW55('Dennis Pierins');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 150));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
*/

/*
const runOnce = function () {
  console.log('This will never run again (this is a lie)');
};
runOnce();
runOnce();
runOnce();

// Immediately invoked function expression
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// Not in scope (private scope) or 'data encapsulation'
// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
