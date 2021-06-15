"use strict";
exports.__esModule = true;
var sieve = function (num) {
    var bools = [false, false];
    var primes = [];
    for (var i = 2; i <= num; i++) {
        bools.push(true);
    }
    for (var i = 0; i < bools.length; i++) {
        if (bools[i]) {
            primes.push(i);
            for (var j = i * 2; j < bools.length; j += i) {
                bools[j] = false;
            }
        }
    }
    return primes;
};
exports["default"] = sieve;
