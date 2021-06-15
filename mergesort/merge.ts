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

export default merge;