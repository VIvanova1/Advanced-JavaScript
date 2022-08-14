//function processOddPositions(array) {
// const odd = array.filter((x, i) => i % 2);
// const doubled = odd.map(x => x * 2);
// doubled.reverse();
// return doubled;
//}

const processOddPositions = array => array
    .filter((x, i) => i % 2)
    .map(x => x * 2)
    .reverse()
    .join(' ');


console.log('---Test 1---');
console.log(processOddPositions([10, 15, 20, 25]))
    /* Result
    50 30
    */

console.log('---Test 2---');
console.log(processOddPositions([3, 0, 10, 4, 7, 3]))
''

/* Result
6 8 0
*/