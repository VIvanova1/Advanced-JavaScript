function lastKNumbersSequence(n, k) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            result.push(1);
            continue;
        }
        let tempEl = 0;
        let previousNums = result.slice(-k);
        for (let j = 0; j < previousNums.length; j++) {
            tempEl += Number(previousNums[j]);
        }
        result.push(tempEl)
    }
    return result;
}
console.log('---Test 1---');
console.log(lastKNumbersSequence(6, 3))

/* Result
[1, 1, 2, 4, 7, 13]
*/

console.log('---Test 2---');
lastKNumbersSequence(8, 2)

/* Result
[1, 1, 2, 3, 5, 8, 13, 21]
*/