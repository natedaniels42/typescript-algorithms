import bubblesort from "./bubblesort";
import mergesort from "./mergesort";

const arr: string[] = ['z','x','c','v','b','n','m','a','s','d','f','g','h','j','k','l','q','w','e','r','t','y','u','i','o','p'];

console.log(`Bubble Sort: ${bubblesort(arr).join(',')}`);
console.log(`Merge Sort: ${mergesort(arr).join(',')}`);