const sliced = require("sliced");

function bindy(arr, cb) {
    return arr.map((c, index, arr) => {
        return function () {
            var args = sliced(arguments);
            args.unshift(c);
            return cb.apply(this, args);
        };
    });
}

module.exports = bindy;
