function sameNumbers(number) {
    let numbers = String(number).split('');
    let sum = 0;
    let isEqual = true

    for (let i = 0; i < numbers.length; i++) {
        let checkNum = numbers[0];
        sum += Number(numbers[i]);
        if (numbers[i] !== checkNum) {
            isEqual = false;
        }
    }
    if (!isEqual) {
        console.log('false');
    } else {
        console.log('true');
    }
    console.log(sum);

}
//---Test---
sameNumbers(2222222)

/* Result
true
14
*/
//---Test---
sameNumbers(1234)

/* Result
false
10
*/