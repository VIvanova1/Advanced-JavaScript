function processOddPositions(array) {
    // const result = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (i % 2 !== 0) {
    //         result.push(Number(array[i]) * 2)
    //     }
    // }
    // let reversedArray = result.reverse();
    // return reversedArray;

    const odd = array.filter((x, i) => i % 2);
    const doubled = odd.map(x => x * 2);
    doubled.reverse();
    return doubled;
}

console.log('---Test 1---');
processOddPositions([10, 15, 20, 25])

/* Result
50 30
*/

console.log('---Test 2---');
processOddPositions([3, 0, 10, 4, 7, 3])

/* Result
6 8 0
*/