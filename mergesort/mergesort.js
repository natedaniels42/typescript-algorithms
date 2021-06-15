"use strict";
exports.__esModule = true;
var merge_1 = require("./merge");
var mergesort = function (arr) {
    var length = arr.length;
    if (length < 2) {
        return arr;
    }
    var mid = Math.floor(length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, length);
    return merge_1["default"](mergesort(left), mergesort(right));
};
exports["default"] = mergesort;
