function squareOfStars(counting) {
    if (Number(counting) === isNaN()) {
        counting = 5
    }
    for (let i = 0; i < counting; i++) {
        console.log('* '.repeat(counting));
    }
}
//---Test---
squareOfStars(5);

/* Result
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */

//---Test---
squareOfStars(2);

/* Result
 * *
 * *
 */