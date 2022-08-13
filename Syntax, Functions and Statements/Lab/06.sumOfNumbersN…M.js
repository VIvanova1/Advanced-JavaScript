function sumOfNumbersNtoM(n, m) {
    let start = Number(n);
    let end = Number(m)
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
}
//---Test---
console.log(sumOfNumbersNtoM('1', '5'));

/* Result
15
*/

//---Test---
console.log(sumOfNumbersNtoM('-8', '20'));

/* Result
174
*/