function biggestElement(array) {
    let res = [];
    for (const arr of array) {
        for (const el of arr) {
            res.push(el)
        }
    }
    let sortedRes = res.sort((a, b) => {
        return b - a
    })
    return sortedRes[0];
}
console.log('---Test 1---');
biggestElement([
    [20, 50, 10],
    [8, 33, 145]
])

/* Result
145
*/

console.log('---Test 2---');
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
])

/* Result
33
*/