"use strict";

// Require the ../lib module
const bindy = require("../lib");

// Define a square function
var square = x => x * x;

// Having an array of numbers, create
// array of functions having receiving
// the numbers as arguments
bindy([1, 2, 3], square).forEach(c => {
    console.log(c());
});

// Using callbacks
bindy([1, 2, 3], (x, cb) => {
    setTimeout(() => {
        cb(x * x);
    }, 100);
}).forEach(c => {
    c(console.log);
});
