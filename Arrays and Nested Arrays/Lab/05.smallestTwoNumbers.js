function smallestTwoNumbers(array) {
    let sortedArray = array.sort((a, b) => {
        return a - b;
    })
    let result = sortedArray.slice(0, 2);
    console.log(result.join(' '));

}
console.log('---Test 1---');
smallestTwoNumbers([30, 15, 50, 5])

/* Result
5 15
*/

console.log('---Test 2---');
smallestTwoNumbers([3, 0, 10, 4, 7, 3])

/* Result
0 3
*/