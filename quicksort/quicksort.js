"use strict";
exports.__esModule = true;
var partition_1 = require("./partition");
var quicksort = function (arr, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left < right) {
        var pivotIndex = partition_1["default"](arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex, right);
    }
    return arr;
};
exports["default"] = quicksort;
