function indexPrime(param1) {
    let prima = [2];
    let i = 3;
    let counter = 0;
    do {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                counter++;
            }
        }
        if (counter === 0) {
            prima.push(i);
            i++;
        } else {
            i++;
            counter = 0;
        }
    }
    while (prima.length < param1);
    return prima[prima.length - 1];
}
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))