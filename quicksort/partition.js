"use strict";
exports.__esModule = true;
var swap_1 = require("./swap");
var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap_1["default"](arr, left, right);
            left++;
            right--;
        }
    }
    return left;
};
exports["default"] = partition;
