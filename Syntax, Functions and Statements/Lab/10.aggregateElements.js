function aggregateElements(array) {
    let sum = 0;
    let invertSum = 0;
    let concat = '';
    for (let i = 0; i < array.length; i++) {
        concat += array[i];
        sum += Number(array[i]);
        invertSum += Number(1 / array[i])
    }
    console.log(sum);
    console.log(invertSum);
    console.log(concat);
}
//---Test---
aggregateElements([1, 2, 3]);

/* Result
6
1.8333333333333333
123
*/

//---Test---
aggregateElements([2, 4, 8, 16]);

/* Result
30
0.9375
24816
*/