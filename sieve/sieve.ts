const sieve = (num: number): number[] => {
    const bools: boolean[] = [false, false];
    const primes: number[] = [];

    for (let i = 2; i <= num; i++) {
        bools.push(true);
    }

    for (let i = 0; i < bools.length; i++) {
        if (bools[i]) {
            primes.push(i);
            for (let j = i * 2; j < bools.length; j += i) {
                bools[j] = false;
            }
        }
    }
    return primes;
}

export default sieve;