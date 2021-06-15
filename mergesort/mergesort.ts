const mergesort = <T>(arr: T[]): T[] => {
    const length: number = arr.length;
    
    if (length < 2) {
        return arr;
    }

    const mid: number = Math.floor(length / 2);
    const left: T[] = arr.slice(0, mid);
    const right: T[] = arr.slice(mid, length);
    
    return merge(mergesort(left), mergesort(right));
} 

const merge = <T>(arr1: T[], arr2: T[]): T[] => {
    const sorted: T[] = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        } else {
            sorted.push(arr2.shift());
        }
    }
    return sorted.concat(arr1).concat(arr2);
}

export default mergesort;