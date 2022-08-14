function biggerHalf(array) {
    let sortedArray = array.sort((a, b) => {
        return a - b;
    })
    for (let i = 0; i < sortedArray.length / 2; i++) {
        sortedArray.shift(sortedArray[i])
    }
    return sortedArray;
}
console.log('---Test 1---');
biggerHalf([4, 7, 2, 5])

/* Result
[5, 7]
*/

console.log('---Test 2---');
biggerHalf([3, 19, 14, 7, 2, 19, 6])

/* Result
[7, 14, 19, 19]
*/