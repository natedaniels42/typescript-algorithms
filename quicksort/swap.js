"use strict";
exports.__esModule = true;
var swap = function (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};
exports["default"] = swap;
