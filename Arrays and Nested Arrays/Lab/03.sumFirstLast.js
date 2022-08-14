function sumFirstLast(array) {
    console.log(Number(array.shift()) + Number(array.pop()));

}
console.log('---Test 1---');
sumFirstLast(['20', '30', '40'])

/* Result
60
*/

console.log('---Test 2---');
sumFirstLast(['5', '10'])

/* Result
15
*/