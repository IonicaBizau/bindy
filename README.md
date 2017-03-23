
# bindy

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/bindy.svg)](https://www.npmjs.com/package/bindy) [![Downloads](https://img.shields.io/npm/dt/bindy.svg)](https://www.npmjs.com/package/bindy)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—Babelify your code before `npm publish`.
 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`bloggify-markdown-adapter`](https://github.com/IonicaBizau/bloggify-markdown-adapter#readme)—Markdown adapter for Bloggify.
 - [`fs-file-tree`](https://github.com/IonicaBizau/fs-file-tree#readme)—Get a directory file tree as an object.
 - [`git-cloner`](https://github.com/IonicaBizau/git-cloner#readme)—Clone multiple git repositories.
 - [`github-emojify`](https://github.com/IonicaBizau/github-emojifiy#readme)—Emojify your GitHub repository descriptions.
 - [`made-in`](https://github.com/IonicaBizau/made-in#readme)—Get GitHub projects created by users from a specific location.
 - [`made-in-brazil`](https://github.com/IonicaBizau/made-in-brazil#readme)—A list of neat projects made in Brazil.
 - [`made-in-india`](https://github.com/IonicaBizau/made-in-india#readme)—A list of neat projects made in India.
 - [`made-in-romania`](https://github.com/IonicaBizau/made-in-romania#readme)—A list of cool projects made in Romania.
 - [`npm-available-array`](https://github.com/IonicaBizau/npm-available-array#readme)—Having an array of package names, check which ones are available on npm.
 - [`read-dir-and-stat`](https://github.com/IonicaBizau/read-dir-and-stat#readme)—Reads the directory files and adds the stat info.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
