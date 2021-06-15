"use strict";
exports.__esModule = true;
var bubblesort = function (arr) {
    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
};
exports["default"] = bubblesort;
