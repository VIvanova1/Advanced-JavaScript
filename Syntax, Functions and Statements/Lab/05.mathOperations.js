function mathOperations(firstNum, secNum, operator) {
    let result = null;

    switch (operator) {
        case '+':
            result = firstNum + secNum;
            break;
        case '-':
            result = firstNum - secNum;
            break;
        case '*':
            result = firstNum * secNum;
            break;
        case '/':
            result = firstNum / secNum;
            break;
        case '%':
            result = firstNum % secNum;
            break;
        case '**':
            result = firstNum ** secNum;
            break;
    }
    console.log(result);
}
//---Test---
mathOperations(5, 6, '+');

/* Result
11
*/

//---Test---
mathOperations(3, 5.5, '*');

/* Result
16.5
*/