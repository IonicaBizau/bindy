
# bindy

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/bindy.svg)](https://www.npmjs.com/package/bindy) [![Downloads](https://img.shields.io/npm/dt/bindy.svg)](https://www.npmjs.com/package/bindy) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Create array of functions bound to input arrays.

## :cloud: Installation

```sh
$ npm i --save bindy
```


## :clipboard: Example



```js
// Require the ../lib module
const bindy = require("bindy");

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

## :memo: Documentation


### `bindy(arr, fn)`
Creates an array of functions bound to the specified arrays.

#### Params
- **Array** `arr`: An array of elements.
- **Function** `fn`: The function to use for binding.

#### Return
- **Array** An array of functions. Each function is bound to the current element from the input array.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—Babelify your code before `npm publish`.
 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`git-cloner`](https://github.com/IonicaBizau/git-cloner#readme)—Clone multiple git repositories.
 - [`github-emojify`](https://github.com/IonicaBizau/github-emojifiy#readme)—Emojify your GitHub repository descriptions.
 - [`npm-available-array`](https://github.com/IonicaBizau/npm-available-array#readme)—Having an array of package names, check which ones are available on npm.
 - [`read-dir-and-stat`](https://github.com/IonicaBizau/read-dir-and-stat#readme)—Reads the directory files and adds the stat info.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
