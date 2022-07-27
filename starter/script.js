'use strict';
// default parameters

const flight = function (f = 12, s = 3, p = 2) {
  const booking = {
    f,
    s,
    p,
  };
  console.log(booking);
};

flight(234, undefined, 54);

const greet = greeting => name => console.log(`${greeting} ${name}`);

const op = greet('op');
op('nuyni');

const nuni = {
  nam: 'nuni',
  itacode: 'ew',
  booking: [],

  book(code, bname) {
    this.booking.push(`${code},${bname}`);
  },
};

nuni.book('32', 'ew');
console.log(nuni.booking);

const buni = {
  nam: 'ooo',
  itacode: 'sa',
  booking: [],
};

const nok = nuni.book;

nok.call(buni, 'ds', 'eweweew');
nok.call(nuni, 'googogog', 'opoop');
console.log(nuni);
console.log(buni.booking);

// const [f, n] = nuni.booking;
// const [o, p] = (f.split(','), n.split(','));
// console.log(o, p);
