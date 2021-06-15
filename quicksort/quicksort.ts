const quicksort = <T>(arr: T[], left = 0, right = arr.length - 1): T[] => {
    if (left < right) {
        const pivotIndex: number = partition(arr, left, right);

        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex, right);
    }

    return arr;
}

const partition = <T>(arr: T[], left: number, right: number): number => {
    const pivot: T = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right --;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

const swap = <T>(arr: T[], index1: number, index2: number): void => {
    const temp: T = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

export default quicksort;