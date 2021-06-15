"use strict";
exports.__esModule = true;
var bubblesort_1 = require("./bubblesort/bubblesort");
var mergesort_1 = require("./mergesort/mergesort");
var quicksort_1 = require("./quicksort/quicksort");
var arr = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
console.log("Bubble Sort: " + bubblesort_1["default"](arr).join(','));
console.log("Merge Sort: " + mergesort_1["default"](arr).join(','));
console.log("Quick Sort: " + quicksort_1["default"](arr).join(','));
