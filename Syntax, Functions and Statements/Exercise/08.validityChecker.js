function validityChecker(x1, y1, x2, y2) {
    let formula = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));


    if (x1 === 0 || y1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (x2 === 0 || y2 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (formula === parseInt(formula)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
//---Test---
validityChecker(3, 0, 0, 4)

/* Result
{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid
*/

//---Test---
validityChecker(2, 1, 1, 1)

/* Result
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid
*/