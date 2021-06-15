import swap from "./swap";

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

export default partition;