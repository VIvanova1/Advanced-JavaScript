function circleArea(arg) {
    if (typeof arg === 'number') {
        console.log((Math.PI * arg * arg).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    }
}
//---Test---
circleArea(5);

/* Result
78.54
*/

//---Test---
circleArea('name');

/* Result
We can not calculate the circle area, because we receive a string.
*/