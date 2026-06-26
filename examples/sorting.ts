import {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    heapSort
} from "../src";

const arr = [64, 34, 25, 12, 22, 11, 90];

console.log("Original:");
console.log(arr);

console.log("\nBubble:");
console.log(bubbleSort(arr));

console.log("\nSelection:");
console.log(selectionSort(arr));

console.log("\nInsertion:");
console.log(insertionSort(arr));

console.log("\nMerge:");
console.log(mergeSort(arr));

console.log("\nQuick:");
console.log(quickSort(arr));

console.log("\nHeap:");
console.log(heapSort(arr));