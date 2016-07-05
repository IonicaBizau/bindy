const sliced = require("sliced")
    , deffy = require("deffy")
    ;

/**
 * bindy
 * Creates an array of functions bound to the specified arrays.
 *
 * @name bindy
 * @function
 * @param {Array} arr An array of elements.
 * @param {Function} fn The function to use for binding.
 * @return {Array} An array of functions. Each function is bound to the current
 * element from the input array.
 */
module.exports = function bindy(arr, cb) {
    arr = deffy(arr, []);
    return arr.map((c, index, arr) => {
        return function () {
            var args = sliced(arguments);
            args.unshift(c);
            return cb.apply(this, args);
        };
    });
};
