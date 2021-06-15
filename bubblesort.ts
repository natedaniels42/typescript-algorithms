const bubblesort = <T>(arr: T[]): T[] => {
    let sorted: boolean = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

export default bubblesort;