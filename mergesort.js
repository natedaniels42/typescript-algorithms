"use strict";
exports.__esModule = true;
var mergesort = function (arr) {
    var length = arr.length;
    if (length < 2) {
        return arr;
    }
    var mid = Math.floor(length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, length);
    return merge(mergesort(left), mergesort(right));
};
var merge = function (arr1, arr2) {
    var sorted = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        }
        else {
            sorted.push(arr2.shift());
        }
    }
    return sorted.concat(arr1).concat(arr2);
};
exports["default"] = mergesort;
