import bubblesort from "./bubblesort/bubblesort";
import mergesort from "./mergesort/mergesort";
import quicksort from "./quicksort/quicksort";
import sieve from "./sieve/sieve";

const arr: string[] = ['z','x','c','v','b','n','m','a','s','d','f','g','h','j','k','l','q','w','e','r','t','y','u','i','o','p'];

console.log(`Bubble Sort: ${bubblesort(arr).join(',')}`);
console.log(`Merge Sort: ${mergesort(arr).join(',')}`);
console.log(`Quick Sort: ${quicksort(arr).join(',')}`);

console.log(`Sieve: ${sieve(100)}`);