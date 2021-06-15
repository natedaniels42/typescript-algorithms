"use strict";
exports.__esModule = true;
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
exports["default"] = merge;
