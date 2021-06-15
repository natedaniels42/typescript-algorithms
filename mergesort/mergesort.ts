import merge from "./merge";

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

export default mergesort;