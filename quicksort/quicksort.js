"use strict";
exports.__esModule = true;
var quicksort = function (arr, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left < right) {
        var pivotIndex = partition(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex, right);
    }
    return arr;
};
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
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
};
var swap = function (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};
exports["default"] = quicksort;
