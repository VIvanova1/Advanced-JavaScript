function evenPositionElements(array) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            res.push(array[i])
        }
    }
    console.log(res.join(' '));
}
console.log('---Test 1---');
evenPositionElements(['20', '30', '40', '50', '60'])

/* Result
20 40 60
*/

console.log('---Test 2---');
evenPositionElements(['5', '10'])

/* Result
5
*/