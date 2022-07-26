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
