# bindy [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/bindy.svg)](https://www.npmjs.com/package/bindy) [![Downloads](https://img.shields.io/npm/dt/bindy.svg)](https://www.npmjs.com/package/bindy) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Create array of functions bound to input arrays.

## Installation

```sh
$ npm i --save bindy
```

## Example

```js
"use strict";

// Require the bindy module
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
```

## Documentation

### `bindy(arr, fn)`
Creates an array of functions bound to the specified arrays.

#### Params
- **Array** `arr`: An array of elements.
- **Function** `fn`: The function to use for binding.

#### Return
- **Array** An array of functions. Each function is bound to the current element from the input array.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`github-emojify`](https://github.com/IonicaBizau/github-emojifiy#readme)

 - [`npm-available-array`](https://github.com/IonicaBizau/npm-available-array#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md