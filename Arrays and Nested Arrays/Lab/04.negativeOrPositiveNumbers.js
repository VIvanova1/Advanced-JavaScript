function negativeOrPositiveNumbers(array) {
    const result = [];
    for (const number of array) {
        if (number < 0) {
            result.unshift(number)
        } else {
            result.push(number)
        }
    }

    result.forEach(element => {
        console.log(element);
    });

}
console.log('---Test 1---');
negativeOrPositiveNumbers([7, -2, 8, 9])

/* Result
-2
7
8
9
*/

console.log('---Test 2---');
negativeOrPositiveNumbers([3, -2, 0, -1])

/* Result
-1
-2
3
0
*/