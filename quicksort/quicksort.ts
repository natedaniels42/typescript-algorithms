import partition from "./partition";

const quicksort = <T>(arr: T[], left = 0, right = arr.length - 1): T[] => {
    if (left < right) {
        const pivotIndex: number = partition(arr, left, right);

        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex, right);
    }

    return arr;
}

export default quicksort;